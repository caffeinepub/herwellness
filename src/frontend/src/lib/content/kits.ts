export interface WellnessKit {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  downloadUrl: string;
  features: string[];
}

export const WELLNESS_KITS: WellnessKit[] = [
  {
    id: 'mindfulness-starter',
    title: 'Mindfulness Starter Pack',
    shortDescription: 'Begin your mindfulness journey with guided practices and techniques',
    fullDescription: `A comprehensive introduction to mindfulness practices designed specifically for women. This kit includes guided meditation scripts, breathing exercises, and daily mindfulness practices to help you reduce stress and increase present-moment awareness.

Perfect for beginners and those looking to establish a consistent mindfulness practice.`,
    coverImage: '/assets/generated/kit-cover-1.dim_900x1200.png',
    downloadUrl: '/assets/kits/herwellness-kit-1.pdf',
    features: [
      '10 guided meditation scripts',
      'Breathing exercise techniques',
      'Daily mindfulness journal prompts',
      'Stress reduction strategies',
      'Printable practice tracker',
    ],
  },
  {
    id: 'healthy-cooking',
    title: 'Healthy Cooking Guide',
    shortDescription: 'Nutritious recipes and meal planning for a healthier lifestyle',
    fullDescription: `Transform your relationship with food through this comprehensive cooking and nutrition guide. Includes balanced recipes, meal planning templates, and nutritional information to support your wellness goals.

Features easy-to-follow recipes that prioritize whole foods and balanced nutrition.`,
    coverImage: '/assets/generated/kit-cover-2.dim_900x1200.png',
    downloadUrl: '/assets/kits/herwellness-kit-2.pdf',
    features: [
      '30+ healthy recipes',
      'Weekly meal planning templates',
      'Grocery shopping lists',
      'Nutritional information guide',
      'Batch cooking tips',
    ],
  },
  {
    id: 'self-care-essentials',
    title: 'Self-Care Essentials',
    shortDescription: 'Daily practices and rituals for nurturing your wellbeing',
    fullDescription: `Discover the power of intentional self-care with this comprehensive guide. Learn to create sustainable self-care routines that fit your lifestyle and support your mental, emotional, and physical wellbeing.

Includes practical exercises, reflection prompts, and actionable strategies.`,
    coverImage: '/assets/generated/kit-cover-3.dim_900x1200.png',
    downloadUrl: '/assets/kits/herwellness-kit-3.pdf',
    features: [
      'Self-care assessment tools',
      'Daily and weekly ritual ideas',
      'Boundary-setting exercises',
      'Stress management techniques',
      'Self-compassion practices',
    ],
  },
];
