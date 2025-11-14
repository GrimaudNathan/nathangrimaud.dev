import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Experiences } from '../components/Experiences';

export const Home = () => {
  return (
    <div className="bg-terminal-bg-primary">
      <Hero />
      <About />
      <Skills />
      <Experiences />
    </div>
  );
};
