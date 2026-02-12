import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { WellnessKit, WellnessChallenge, UserProfile, ChallengeProgress } from '../backend';

export function useWellnessKits() {
  const { actor, isFetching } = useActor();

  return useQuery<WellnessKit[]>({
    queryKey: ['wellnessKits'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getWellnessKits();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useChallenges() {
  const { actor, isFetching } = useActor();

  return useQuery<WellnessChallenge[]>({
    queryKey: ['challenges'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getChallenges();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useChallenge(id: string) {
  const { actor, isFetching } = useActor();

  return useQuery<WellnessChallenge | null>({
    queryKey: ['challenge', id],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getChallenge(id);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUserPreferences() {
  const { actor, isFetching } = useActor();

  return useQuery<UserProfile | null>({
    queryKey: ['userPreferences'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getPreferences();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useChallengeProgress() {
  const { actor, isFetching } = useActor();

  return useQuery<ChallengeProgress[]>({
    queryKey: ['challengeProgress'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProgress();
    },
    enabled: !!actor && !isFetching,
  });
}
