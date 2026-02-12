import { useState } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useActor } from '../../hooks/useActor';
import { storePreferences } from './storage';
import type { WellnessPreferences } from '../../backend';

export function usePreferencesSync() {
  const { identity } = useInternetIdentity();
  const { actor } = useActor();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isSignedIn = identity && !identity.getPrincipal().isAnonymous();

  const savePreferences = async (preferences: WellnessPreferences) => {
    setIsLoading(true);
    setError(null);

    try {
      // Always store locally
      storePreferences(preferences);

      // If signed in, also save to backend
      if (isSignedIn && actor) {
        await actor.savePreferences(preferences);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save preferences';
      setError(errorMessage);
      // Don't throw - local storage succeeded
    } finally {
      setIsLoading(false);
    }
  };

  return {
    savePreferences,
    isLoading,
    error,
  };
}
