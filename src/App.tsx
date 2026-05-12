import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import { Home } from './pages/Home';
import { DesignSystem } from './pages/DesignSystem';
import { NotFound } from './pages/NotFound';

export default function App() {
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
