import type { WellnessPreferences } from '../../backend';

export interface Recommendations {
  summary: string;
  suggestions: string[];
}

export function generateRecommendations(preferences: WellnessPreferences): Recommendations {
  const { ageRange, activityLevel, focusAreas, wellnessGoals } = preferences;

  const suggestions: string[] = [];

  // Activity-based suggestions
  if (activityLevel === 'Sedentary' || activityLevel === 'Lightly Active') {
    suggestions.push('Start with gentle movement practices like walking or beginner yoga to gradually increase your activity level.');
  } else if (activityLevel === 'Very Active' || activityLevel === 'Extremely Active') {
    suggestions.push('Focus on recovery and rest days to prevent burnout and support your active lifestyle.');
  }

  // Focus area suggestions
  if (focusAreas.includes('Mental Health') || focusAreas.includes('Stress Management')) {
    suggestions.push('Incorporate daily mindfulness or meditation practices to support mental wellbeing and reduce stress.');
  }

  if (focusAreas.includes('Physical Fitness')) {
    suggestions.push('Consider joining our 30-Day Fitness Challenge to build strength and establish a consistent exercise routine.');
  }

  if (focusAreas.includes('Nutrition')) {
    suggestions.push('Explore our Healthy Cooking Guide for nutritious recipes and meal planning strategies.');
  }

  if (focusAreas.includes('Sleep')) {
    suggestions.push('Establish a calming bedtime routine with relaxation techniques and limit screen time before bed.');
  }

  if (focusAreas.includes('Self-Care')) {
    suggestions.push('Download our Self-Care Essentials kit to discover daily practices that nurture your wellbeing.');
  }

  // Goal-based suggestions
  if (wellnessGoals.includes('Mindfulness')) {
    suggestions.push('Try our 7-Day Meditation Challenge to build a sustainable mindfulness practice.');
  }

  if (wellnessGoals.includes('Stress Relief')) {
    suggestions.push('Practice deep breathing exercises throughout the day and consider the 21-Day Gratitude Challenge to shift your mindset.');
  }

  if (wellnessGoals.includes('Better Sleep')) {
    suggestions.push('Create a consistent sleep schedule and wind down with gentle stretching or meditation before bed.');
  }

  // General suggestions
  suggestions.push('Stay hydrated throughout the day and aim for balanced, nutritious meals.');
  suggestions.push('Connect with supportive communities and don\'t hesitate to seek professional guidance when needed.');

  const summary = `Based on your ${activityLevel.toLowerCase()} lifestyle and focus on ${focusAreas.slice(0, 2).join(' and ').toLowerCase()}, we've created a personalized wellness plan to help you achieve your goals.`;

  return {
    summary,
    suggestions: suggestions.slice(0, 6), // Limit to 6 suggestions
  };
}
