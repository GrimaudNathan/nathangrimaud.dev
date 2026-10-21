import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Experiences from '../components/Experiences/Experiences';
import Footer from '../components/Footer/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function Home() {
  useDocumentTitle('Nathan Grimaud | Développeur Front-End');

  return (
    <div className="bg-terminal-bg-primary">
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Footer />
    </div>
  );
}
