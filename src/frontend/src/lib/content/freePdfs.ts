export interface FreePdf {
  id: string;
  title: string;
  shortDescription: string;
  downloadUrl: string;
}

export const FREE_PDFS: FreePdf[] = [
  {
    id: 'wellness-starter-guide',
    title: 'Wellness Starter Guide',
    shortDescription: 'A comprehensive introduction to holistic wellness practices for women',
    downloadUrl: '/assets/pdfs/free-pdf-1.pdf',
  },
  {
    id: 'daily-wellness-planner',
    title: 'Daily Wellness Planner',
    shortDescription: 'Track your daily wellness habits and goals with this printable planner',
    downloadUrl: '/assets/pdfs/free-pdf-2.pdf',
  },
];
