import type { WellnessPreferences } from '../../backend';

const PREFERENCES_KEY = 'herwellness_preferences';

export function storePreferences(preferences: WellnessPreferences): void {
  try {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error('Failed to store preferences:', error);
  }
}

export function getStoredPreferences(): WellnessPreferences | null {
  try {
    const stored = localStorage.getItem(PREFERENCES_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Failed to retrieve preferences:', error);
    return null;
  }
}

export function clearStoredPreferences(): void {
  try {
    localStorage.removeItem(PREFERENCES_KEY);
  } catch (error) {
    console.error('Failed to clear preferences:', error);
  }
}
