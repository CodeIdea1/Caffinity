'use client';

import { useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';

export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LoadingPage />
      <HeroSection />
      <AboutSection />
    </>
  );
}
