import { Home } from '../pages/Home';
import { DesignSystem } from '../pages/DesignSystem';

type Route = '/' | '/design-system';

interface RouterProps {
  page: Route;
}

export const Router = ({ page }: RouterProps) => {
  switch (page) {
    case '/':
      return <Home />;
    case '/design-system':
      return <DesignSystem />;
    default:
      return <Home />;
  }
};
