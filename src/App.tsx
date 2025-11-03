import { useState, useEffect, useTransition } from 'react';
import { Cursor } from './components/Cursor';
import { Menu } from './components/Menu';
import { Router } from './router/Router';

type Route = '/' | '/design-system';

function App() {
  const [page, setPage] = useState<Route>('/');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as Route;
      setPage(path || '/');
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = (url: string) => {
    const route = url as Route;
    startTransition(() => {
      setPage(route);
      window.history.pushState({}, '', route);
    });
  };

  return (
    <>
      <Cursor />
      <Menu />
      <div className={isPending ? 'opacity-50 transition-opacity duration-200' : ''}>
        <Router page={page} />
      </div>
    </>
  );
}

export default App;
