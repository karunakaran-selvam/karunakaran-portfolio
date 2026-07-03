import { lazy } from 'react';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';

const WorkSection = lazy(() =>
  import('@/components/sections/Work').then((module) => ({
    default: module.Work,
  }))
);
const ExperienceSection = lazy(() =>
  import('@/components/sections/Experience').then((module) => ({
    default: module.Experience,
  }))
);
const ContactSection = lazy(() =>
  import('@/components/sections/Contact').then((module) => ({
    default: module.Contact,
  }))
);

/** Renders the portfolio landing page with all major sections. */
export const Home = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <WorkSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
