import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import AboutSection from '../components/home/AboutSection';
import ExpertiseGrid from '../components/home/ExpertiseGrid';
import TrustSection from '../components/home/TrustSection';
import ProcessSteps from '../components/home/ProcessSteps';
import SigmiSection from '../components/home/SigmiSection';
import RealisationsSection from '../components/home/RealisationsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';


function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ExpertiseGrid />
      <TrustSection />
      <ProcessSteps />
      <SigmiSection />
      <RealisationsSection />
      <TestimonialsSection />
      <FaqSection />
      
    </>
  );
}

export default HomePage;