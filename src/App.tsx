import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Menu } from './components/Menu';
import { Router } from './router/Router';
import { Loading } from './components/Loading';

type Route = '/' | '/design-system';

function App() {
  const [page, setPage] = useState<Route>('/');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as Route;
      setPage(path || '/');
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Simuler le chargement initial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <>
            <Menu />
            <Router page={page} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
