import Reveal from '../common/Reveal';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import './CtaSection.css';

function CtaSection() {
  return (
    <section className="cta-section">
      <Reveal className="cta-text">
        <h2>Un projet, un doute technique, un désordre à comprendre ?</h2>
        <p>
          Décrivez-nous votre situation : nous vous rappelons et vous
          adressons une proposition détaillée sous 48 heures, sans engagement.
        </p>
      </Reveal>
      <Reveal delay={100} className="cta-buttons">
        <button className="btn-dark">
          Demander un devis gratuit <FiArrowRight />
        </button>
        <button className="btn-outline">
          <FiMail /> Nous écrire
        </button>
      </Reveal>
    </section>
  );
}

export default CtaSection;