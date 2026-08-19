import SigmiHero from '../components/sigmi/SigmiHero';
import SigmiPresentation from '../components/sigmi/SigmiPresentation';
import SigmiFeatures from '../components/sigmi/SigmiFeatures';
import SigmiPreview from '../components/sigmi/SigmiPreview';
import SigmiBenefits from '../components/sigmi/SigmiBenefits';
import SigmiSteps from '../components/sigmi/SigmiSteps';

function SigmiPage() {
  return (
    <>
      <SigmiHero />
      <SigmiPresentation />
      <SigmiFeatures />
      <SigmiPreview />
      <SigmiBenefits />
      <SigmiSteps />
    </>
  );
}

export default SigmiPage;