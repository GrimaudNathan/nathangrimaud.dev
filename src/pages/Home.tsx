import { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Experiences from '../components/Experiences/Experiences';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

export function Home() {
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
    <div className="bg-terminal-bg-primary">
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Footer />
    </div>
  );
}
