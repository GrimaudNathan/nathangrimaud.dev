import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Loading } from './components/Loading';
import { Home } from './pages/Home';
import { DesignSystem } from './pages/DesignSystem';
import { NotFound } from './pages/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
