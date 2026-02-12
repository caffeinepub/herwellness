import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { SiteLayout } from './components/layout/SiteLayout';
import { HomePage } from './pages/HomePage';
import { PersonalizedWellnessEntryPage } from './pages/PersonalizedWellnessEntryPage';
import { PersonalizationQuestionnairePage } from './pages/PersonalizationQuestionnairePage';
import { PersonalizationResultsPage } from './pages/PersonalizationResultsPage';
import { WellnessKitsListPage } from './pages/WellnessKitsListPage';
import { WellnessKitDetailPage } from './pages/WellnessKitDetailPage';
import { ChallengesListPage } from './pages/ChallengesListPage';
import { ChallengeDetailPage } from './pages/ChallengeDetailPage';
import { AboutFaqPage } from './pages/AboutFaqPage';
import { FreePdfsPage } from './pages/FreePdfsPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const personalizedWellnessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/personalized-wellness',
  component: PersonalizedWellnessEntryPage,
});

const questionnaireRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/personalized-wellness/questionnaire',
  component: PersonalizationQuestionnairePage,
});

const resultsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/personalized-wellness/results',
  component: PersonalizationResultsPage,
});

const kitsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/wellness-kits',
  component: WellnessKitsListPage,
});

const kitDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/wellness-kits/$kitId',
  component: WellnessKitDetailPage,
});

const challengesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/challenges',
  component: ChallengesListPage,
});

const challengeDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/challenges/$challengeId',
  component: ChallengeDetailPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutFaqPage,
});

const freePdfsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/free-pdfs',
  component: FreePdfsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  personalizedWellnessRoute,
  questionnaireRoute,
  resultsRoute,
  kitsRoute,
  kitDetailRoute,
  challengesRoute,
  challengeDetailRoute,
  aboutRoute,
  freePdfsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
