interface ChallengeJoinState {
  [challengeId: string]: {
    joined: boolean;
    completedTasks: number[];
  };
}

const CHALLENGE_STATE_KEY = 'herwellness_challenges';

export function storeChallengeState(challengeId: string, joined: boolean, completedTasks: number[]): void {
  try {
    const state = getChallengeState();
    state[challengeId] = { joined, completedTasks };
    localStorage.setItem(CHALLENGE_STATE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to store challenge state:', error);
  }
}

export function getChallengeState(): ChallengeJoinState {
  try {
    const stored = localStorage.getItem(CHALLENGE_STATE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Failed to retrieve challenge state:', error);
    return {};
  }
}

export function getChallengeTasks(challengeId: string): number[] {
  const state = getChallengeState();
  return state[challengeId]?.completedTasks || [];
}

export function isChallengeJoined(challengeId: string): boolean {
  const state = getChallengeState();
  return state[challengeId]?.joined || false;
}

export function clearChallengeState(challengeId: string): void {
  try {
    const state = getChallengeState();
    delete state[challengeId];
    localStorage.setItem(CHALLENGE_STATE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to clear challenge state:', error);
  }
}
