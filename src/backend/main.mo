import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Principal "mo:core/Principal";

actor {
  type WellnessPreferences = {
    ageRange : Text;
    activityLevel : Text;
    focusAreas : [Text];
    wellnessGoals : [Text];
  };

  type UserProfile = {
    preferences : WellnessPreferences;
    lastUpdated : Time.Time;
  };

  type WellnessKit = {
    id : Text;
    title : Text;
    description : Text;
    assetsUrl : Text;
  };

  type ChallengeTask = {
    day : Nat;
    task : Text;
  };

  type WellnessChallenge = {
    id : Text;
    title : Text;
    description : Text;
    duration : Nat;
    tasks : [ChallengeTask];
  };

  type ChallengeProgress = {
    challengeId : Text;
    completedTasks : [Nat];
    joinedAt : Time.Time;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();
  let userProgress = Map.empty<Principal, [ChallengeProgress]>();

  let wellnessKits = [
    {
      id = "kit1";
      title = "Mindfulness Starter Pack";
      description = "Beginner resources for practicing mindfulness";
      assetsUrl = "https://example.com/assets/kit1.zip";
    },
    {
      id = "kit2";
      title = "Healthy Cooking Guide";
      description = "Recipes and meal plans for a healthier lifestyle";
      assetsUrl = "https://example.com/assets/kit2.zip";
    },
  ];

  let wellnessChallenges = [
    {
      id = "challenge1";
      title = "7-Day Meditation Challenge";
      description = "Daily guided meditations for 7 days";
      duration = 7;
      tasks = [
        { day = 1; task = "10-minute breath meditation" },
        { day = 2; task = "Body scan meditation" },
      ];
    },
    {
      id = "challenge2";
      title = "30-Day Fitness Challenge";
      description = "Daily workouts to improve overall fitness";
      duration = 30;
      tasks = [
        { day = 1; task = "15-minute walk" },
        { day = 2; task = "Beginner yoga flow" },
      ];
    },
  ];

  module WellnessChallenge {
    public func compare(a : WellnessChallenge, b : WellnessChallenge) : Order.Order {
      Text.compare(a.title, b.title);
    };
  };

  module WellnessKit {
    public func compareByTitle(a : WellnessKit, b : WellnessKit) : Order.Order {
      Text.compare(a.title, b.title);
    };
  };

  public shared ({ caller }) func savePreferences(preferences : WellnessPreferences) : async () {
    let profile : UserProfile = {
      preferences;
      lastUpdated = Time.now();
    };
    userProfiles.add(caller, profile);
  };

  public query ({ caller }) func getPreferences() : async ?UserProfile {
    userProfiles.get(caller);
  };

  public query ({ caller }) func getWellnessKits() : async [WellnessKit] {
    wellnessKits.sort(WellnessKit.compareByTitle);
  };

  public query ({ caller }) func getChallenges() : async [WellnessChallenge] {
    wellnessChallenges.sort();
  };

  public query ({ caller }) func getChallenge(id : Text) : async ?WellnessChallenge {
    wellnessChallenges.find(func(c) { c.id == id });
  };

  public shared ({ caller }) func joinChallenge(challengeId : Text) : async () {
    let progress : ChallengeProgress = {
      challengeId;
      completedTasks = [];
      joinedAt = Time.now();
    };

    let existingProgress = switch (userProgress.get(caller)) {
      case (null) { [] };
      case (?progs) { progs };
    };

    userProgress.add(caller, existingProgress.concat([progress]));
  };

  public shared ({ caller }) func leaveChallenge(challengeId : Text) : async () {
    let existingProgress = switch (userProgress.get(caller)) {
      case (null) { [] };
      case (?progs) { progs };
    };

    let updatedProgress = existingProgress.filter(func(p) { p.challengeId != challengeId });
    userProgress.add(caller, updatedProgress);
  };

  public shared ({ caller }) func completeTask(challengeId : Text, day : Nat) : async () {
    let existingProgress = switch (userProgress.get(caller)) {
      case (null) { [] };
      case (?progs) { progs };
    };

    let updatedProgress = existingProgress.map(
      func(p) {
        if (p.challengeId == challengeId) {
          let newCompletedTasks = p.completedTasks.concat([day]);
          {
            p with completedTasks = newCompletedTasks;
          };
        } else {
          p;
        };
      }
    );

    userProgress.add(caller, updatedProgress);
  };

  public query ({ caller }) func getProgress() : async [ChallengeProgress] {
    switch (userProgress.get(caller)) {
      case (null) { [] };
      case (?progress) { progress };
    };
  };
};
