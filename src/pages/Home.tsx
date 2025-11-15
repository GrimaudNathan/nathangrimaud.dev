import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Experiences } from '../components/Experiences';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="bg-terminal-bg-primary">
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Footer />
    </div>
  );
};
