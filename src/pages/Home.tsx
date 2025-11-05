import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';

export const Home = () => {
  return (
    <div className="bg-terminal-bg-primary">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};
