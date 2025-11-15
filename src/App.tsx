import { useState, useEffect } from 'react';
import { Menu } from './components/Menu';
import { Router } from './router/Router';

type Route = '/' | '/design-system';

function App() {
  const [page, setPage] = useState<Route>('/');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as Route;
      setPage(path || '/');
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <>
      <Menu />
      <Router page={page} />
    </>
  );
}

export default App;
