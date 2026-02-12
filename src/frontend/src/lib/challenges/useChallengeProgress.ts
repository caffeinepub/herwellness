import { useState, useEffect } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useActor } from '../../hooks/useActor';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { storeChallengeState, getChallengeState } from './storage';

export function useChallengeProgress(challengeId: string) {
  const { identity } = useInternetIdentity();
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const isSignedIn = identity && !identity.getPrincipal().isAnonymous();

  // Local state for anonymous users
  const [localState, setLocalState] = useState(() => {
    const state = getChallengeState();
    return state[challengeId] || { joined: false, completedTasks: [] };
  });

  // Fetch progress from backend for signed-in users
  const { data: backendProgress } = useQuery({
    queryKey: ['challengeProgress', challengeId],
    queryFn: async () => {
      if (!actor || !isSignedIn) return null;
      const allProgress = await actor.getProgress();
      return allProgress.find(p => p.challengeId === challengeId);
    },
    enabled: !!actor && isSignedIn,
  });

  const isJoined = isSignedIn ? !!backendProgress : localState.joined;
  const completedTasks = isSignedIn 
    ? (backendProgress?.completedTasks.map(t => Number(t)) || [])
    : localState.completedTasks;

  const joinMutation = useMutation({
    mutationFn: async () => {
      if (isSignedIn && actor) {
        await actor.joinChallenge(challengeId);
      } else {
        // Local storage for anonymous users
        const newState = { joined: true, completedTasks: [] };
        setLocalState(newState);
        storeChallengeState(challengeId, true, []);
      }
    },
    onSuccess: () => {
      if (isSignedIn) {
        queryClient.invalidateQueries({ queryKey: ['challengeProgress', challengeId] });
      }
    },
  });

  const leaveMutation = useMutation({
    mutationFn: async () => {
      if (isSignedIn && actor) {
        await actor.leaveChallenge(challengeId);
      } else {
        const newState = { joined: false, completedTasks: [] };
        setLocalState(newState);
        storeChallengeState(challengeId, false, []);
      }
    },
    onSuccess: () => {
      if (isSignedIn) {
        queryClient.invalidateQueries({ queryKey: ['challengeProgress', challengeId] });
      }
    },
  });

  const completeTaskMutation = useMutation({
    mutationFn: async (day: number) => {
      if (isSignedIn && actor) {
        await actor.completeTask(challengeId, BigInt(day));
      } else {
        const newCompletedTasks = completedTasks.includes(day)
          ? completedTasks.filter(t => t !== day)
          : [...completedTasks, day];
        const newState = { joined: true, completedTasks: newCompletedTasks };
        setLocalState(newState);
        storeChallengeState(challengeId, true, newCompletedTasks);
      }
    },
    onSuccess: () => {
      if (isSignedIn) {
        queryClient.invalidateQueries({ queryKey: ['challengeProgress', challengeId] });
      }
    },
  });

  const isLoading = joinMutation.isPending || leaveMutation.isPending || completeTaskMutation.isPending;
  const error = joinMutation.error || leaveMutation.error || completeTaskMutation.error;

  return {
    isJoined,
    completedTasks,
    isLoading,
    error: error ? (error instanceof Error ? error.message : 'An error occurred') : null,
    joinChallenge: joinMutation.mutate,
    leaveChallenge: leaveMutation.mutate,
    completeTask: completeTaskMutation.mutate,
  };
}
