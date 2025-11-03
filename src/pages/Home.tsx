import { Hero } from '../components/Hero';
import { About } from '../components/About';

export const Home = () => {
  return (
    <div className="bg-terminal-bg-primary min-h-screen">
      <Hero />
      <About />
    </div>
  );
};
