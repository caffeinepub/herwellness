import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface WellnessKit {
    id: string;
    title: string;
    description: string;
    assetsUrl: string;
}
export interface ChallengeProgress {
    completedTasks: Array<bigint>;
    joinedAt: Time;
    challengeId: string;
}
export type Time = bigint;
export interface ChallengeTask {
    day: bigint;
    task: string;
}
export interface WellnessChallenge {
    id: string;
    tasks: Array<ChallengeTask>;
    title: string;
    duration: bigint;
    description: string;
}
export interface UserProfile {
    lastUpdated: Time;
    preferences: WellnessPreferences;
}
export interface WellnessPreferences {
    activityLevel: string;
    ageRange: string;
    wellnessGoals: Array<string>;
    focusAreas: Array<string>;
}
export interface backendInterface {
    completeTask(challengeId: string, day: bigint): Promise<void>;
    getChallenge(id: string): Promise<WellnessChallenge | null>;
    getChallenges(): Promise<Array<WellnessChallenge>>;
    getPreferences(): Promise<UserProfile | null>;
    getProgress(): Promise<Array<ChallengeProgress>>;
    getWellnessKits(): Promise<Array<WellnessKit>>;
    joinChallenge(challengeId: string): Promise<void>;
    leaveChallenge(challengeId: string): Promise<void>;
    savePreferences(preferences: WellnessPreferences): Promise<void>;
}
