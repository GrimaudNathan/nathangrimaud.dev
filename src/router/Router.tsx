import { lazy, Suspense } from 'react';
import { Home } from '../pages/Home';
import { Loading } from '../components/Loading';

// Lazy load DesignSystem
const DesignSystem = lazy(() => import('../pages/DesignSystem').then(module => ({ default: module.DesignSystem })));

type Route = '/' | '/design-system';

interface RouterProps {
  page: Route;
}

export const Router = ({ page }: RouterProps) => {
  switch (page) {
    case '/':
      return <Home />;
    case '/design-system':
      return (
        <Suspense fallback={<Loading />}>
          <DesignSystem />
        </Suspense>
      );
    default:
      return <Home />;
  }
};
