import { useTimeBasedBackground } from '../../hooks/useTimeBasedBackground';
import Reveal from '../common/Reveal';
import heroLight from '../../assets/jour.jpeg';
import heroDark from '../../assets/nuit.jpeg';
import './Hero.css';

function Hero() {
  const backgroundImage = useTimeBasedBackground(heroLight, heroDark);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <Reveal>
          <h1>
            Construire au Bénin,<br />
            en toute sécurité<br />
            technique
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="hero-subtitle">
            KNR Expertises accompagne les particuliers, promoteurs,
            entreprises, banques et collectivités à chaque étape de leurs
            projets de construction : études, contrôle de chantier,
            diagnostic des désordres et expertise après sinistre.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="hero-cta">
            <button className="btn-primary">
              Demander un devis gratuit <span>→</span>
            </button>
            <button className="btn-secondary">
              Découvrir nos expertises
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;