import Reveal from '../common/Reveal';
import { FiCheck } from 'react-icons/fi';
import sigmiPreview from '../../assets/S1.jpg'; // à remplacer par ton export
import './SigmiSection.css';

const features = [
  'Inventaire et cartographie de tous vos actifs',
  'Maintenance préventive planifiée automatiquement',
  'Inspections terrain sur mobile, même hors connexion',
  'Tableaux de bord et budget de maintenance maîtrisé',
];

function SigmiSection() {
  return (
    <section className="sigmi-section">
      <Reveal className="sigmi-content">
        <span className="eyebrow">Notre solution numérique</span>
        <h2>SIGMI, le pilotage intelligent de vos infrastructures</h2>
        <p>
          Le Système Intelligent de Gestion et de Maintenance des
          Infrastructures centralise l'état de votre patrimoine bâti et
          transforme une maintenance subie en maintenance maîtrisée.
        </p>

        <ul className="sigmi-features">
          {features.map((feature, i) => (
            <li key={i}>
              <span className="check-icon"><FiCheck /></span>
              {feature}
            </li>
          ))}
        </ul>

        <a href="/sigmi" className="btn-dark-link">
          Découvrir SIGMI <span>→</span>
        </a>
      </Reveal>

      <Reveal delay={150} className="sigmi-preview-wrap">
        <img src={sigmiPreview} alt="Aperçu du tableau de bord SIGMI" className="sigmi-preview-img" />
        <span className="sigmi-caption">Aperçu de l'interface SIGMI visuel de démonstration.</span>
      </Reveal>
    </section>
  );
}

export default SigmiSection;