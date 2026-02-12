export interface ChallengeTask {
  day: number;
  task: string;
}

export interface WellnessChallenge {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: number;
  coverImage: string;
  tasks: ChallengeTask[];
}

export const WELLNESS_CHALLENGES: WellnessChallenge[] = [
  {
    id: 'meditation-7day',
    title: '7-Day Meditation Challenge',
    shortDescription: 'Build a daily meditation practice in just one week',
    fullDescription: `Start your meditation journey with this beginner-friendly 7-day challenge. Each day introduces a new meditation technique, gradually building your practice and confidence.

By the end of this week, you'll have experienced multiple meditation styles and developed the foundation for a sustainable practice.`,
    duration: 7,
    coverImage: '/assets/generated/challenge-cover-1.dim_1200x675.png',
    tasks: [
      { day: 1, task: '5-minute breath awareness meditation' },
      { day: 2, task: '10-minute body scan meditation' },
      { day: 3, task: '8-minute loving-kindness meditation' },
      { day: 4, task: '10-minute mindful walking practice' },
      { day: 5, task: '12-minute guided visualization' },
      { day: 6, task: '10-minute gratitude meditation' },
      { day: 7, task: '15-minute open awareness meditation' },
    ],
  },
  {
    id: 'fitness-30day',
    title: '30-Day Fitness Challenge',
    shortDescription: 'Build strength and endurance with progressive daily workouts',
    fullDescription: `A month-long fitness journey designed to help you build strength, improve endurance, and establish a consistent exercise routine. Each week progressively builds on the last, with rest days built in for recovery.

Suitable for all fitness levels with modifications provided for each exercise.`,
    duration: 30,
    coverImage: '/assets/generated/challenge-cover-2.dim_1200x675.png',
    tasks: [
      { day: 1, task: '15-minute walk or light cardio' },
      { day: 2, task: '20-minute beginner yoga flow' },
      { day: 3, task: '15-minute strength training (upper body)' },
      { day: 4, task: 'Rest day - gentle stretching' },
      { day: 5, task: '20-minute walk or jog' },
      { day: 6, task: '15-minute strength training (lower body)' },
      { day: 7, task: '25-minute yoga or pilates' },
      { day: 8, task: '20-minute cardio workout' },
      { day: 9, task: '20-minute full body strength' },
      { day: 10, task: 'Rest day - mobility work' },
      { day: 11, task: '25-minute walk or jog' },
      { day: 12, task: '20-minute HIIT workout' },
      { day: 13, task: '20-minute yoga flow' },
      { day: 14, task: 'Rest day - gentle stretching' },
      { day: 15, task: '30-minute cardio session' },
      { day: 16, task: '25-minute strength training' },
      { day: 17, task: '20-minute core workout' },
      { day: 18, task: 'Rest day - foam rolling' },
      { day: 19, task: '30-minute walk or run' },
      { day: 20, task: '25-minute full body workout' },
      { day: 21, task: '30-minute yoga practice' },
      { day: 22, task: '25-minute cardio intervals' },
      { day: 23, task: '25-minute strength circuit' },
      { day: 24, task: 'Rest day - active recovery' },
      { day: 25, task: '35-minute endurance workout' },
      { day: 26, task: '30-minute strength training' },
      { day: 27, task: '25-minute HIIT session' },
      { day: 28, task: 'Rest day - stretching' },
      { day: 29, task: '40-minute cardio challenge' },
      { day: 30, task: '30-minute celebration workout' },
    ],
  },
  {
    id: 'gratitude-21day',
    title: '21-Day Gratitude Challenge',
    shortDescription: 'Cultivate positivity and appreciation through daily gratitude practice',
    fullDescription: `Transform your mindset with this 21-day gratitude challenge. Research shows it takes 21 days to form a new habit - use this challenge to develop a lasting gratitude practice that enhances your mental wellbeing and overall life satisfaction.

Each day includes a unique gratitude prompt or exercise to deepen your practice.`,
    duration: 21,
    coverImage: '/assets/generated/challenge-cover-3.dim_1200x675.png',
    tasks: [
      { day: 1, task: 'Write down 3 things you\'re grateful for today' },
      { day: 2, task: 'Express gratitude to someone who helped you' },
      { day: 3, task: 'Appreciate something in nature' },
      { day: 4, task: 'Be grateful for a challenge that made you stronger' },
      { day: 5, task: 'Appreciate your body and what it does for you' },
      { day: 6, task: 'Write a gratitude letter (don\'t send yet)' },
      { day: 7, task: 'Reflect on a happy memory with gratitude' },
      { day: 8, task: 'Be grateful for a modern convenience' },
      { day: 9, task: 'Appreciate a skill or talent you have' },
      { day: 10, task: 'Express gratitude for a lesson learned' },
      { day: 11, task: 'Be thankful for a relationship in your life' },
      { day: 12, task: 'Appreciate something beautiful you saw today' },
      { day: 13, task: 'Be grateful for your home and shelter' },
      { day: 14, task: 'Reflect on weekly gratitude highlights' },
      { day: 15, task: 'Appreciate a food or meal you enjoyed' },
      { day: 16, task: 'Be grateful for your health' },
      { day: 17, task: 'Express thanks for an opportunity you had' },
      { day: 18, task: 'Appreciate music or art that moves you' },
      { day: 19, task: 'Be grateful for a personal strength' },
      { day: 20, task: 'Send the gratitude letter from Day 6' },
      { day: 21, task: 'Reflect on your 21-day gratitude journey' },
    ],
  },
];
