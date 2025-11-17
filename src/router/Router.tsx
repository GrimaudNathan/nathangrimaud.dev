import { Home } from '../pages/Home';
import { DesignSystem } from '../pages/DesignSystem';
import { NotFound } from '../pages/NotFound';

type Route = '/' | '/design-system' | '/404';

interface RouterProps {
  page: Route;
}

export const Router = ({ page }: RouterProps) => {
  switch (page) {
    case '/':
      return <Home />;
    case '/design-system':
      return <DesignSystem />;
    case '/404':
      return <NotFound />;
    default:
      return <NotFound />;
  }
};
