import { useState } from 'react';
import Reveal from '../common/Reveal';
import step1Img from '../../assets/P1.jpg'; // à remplacer par tes exports
import step2Img from '../../assets/P1.jpg';
import step3Img from '../../assets/P1.jpg';
import step4Img from '../../assets/P1.jpg';
import step5Img from '../../assets/P1.jpg';
import './ProcessSteps.css';

const steps = [
  {
    number: '01',
    title: 'Écoute & qualification',
    subtitle: 'Compte rendu d\'échange',
    description:
      "Vous nous exposez votre situation par téléphone, par e-mail ou lors d'un rendez-vous. Nous posons les bonnes questions pour identifier la mission réellement utile — et écarter celles dont vous n'avez pas besoin.",
    livrable: 'Compte rendu d\'échange',
    duree: '30 à 60 minutes',
    image: step1Img,
    badge: 'Étape 01',
  },
  {
    number: '02',
    title: 'Proposition sous 48 h',
    subtitle: 'Devis détaillé et lettre de mission',
    description:
      "Nous vous adressons un devis détaillé et une lettre de mission précisant le périmètre, les livrables et le calendrier de l'intervention.",
    livrable: 'Devis & lettre de mission',
    duree: '48 heures',
    image: step2Img,
    badge: 'Étape 02',
  },
  {
    number: '03',
    title: 'Intervention sur site',
    subtitle: 'Relevés, mesures & reportage photo',
    description:
      "Nos experts se déplacent sur le terrain pour réaliser les relevés, mesures instrumentées et le reportage photographique nécessaires à l'analyse.",
    livrable: 'Relevés & reportage photo',
    duree: 'Variable selon mission',
    image: step3Img,
    badge: 'Étape 03',
  },
  {
    number: '04',
    title: 'Analyse & rapport',
    subtitle: 'Rapport technique illustré',
    description:
      "Les données collectées sont analysées et synthétisées dans un rapport technique clair, illustré et argumenté.",
    livrable: 'Rapport technique illustré',
    duree: '5 à 10 jours ouvrés',
    image: step4Img,
    badge: 'Étape 04',
  },
  {
    number: '05',
    title: 'Restitution & suivi',
    subtitle: 'Séance de restitution & recommandations',
    description:
      "Nous vous restituons les conclusions lors d'une séance dédiée, avec des recommandations concrètes et un suivi si nécessaire.",
    livrable: 'Séance de restitution',
    duree: '30 à 45 minutes',
    image: step5Img,
    badge: 'Étape 05',
  },
];

function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  return (
    <section className="process-section">
      <Reveal className="process-header">
        <span className="eyebrow">Notre processus de travail</span>
        <h2>Une méthode en cinq étapes, identique pour chaque mission</h2>
        <p>
          Cette régularité est ce qui rend nos conclusions comparables,
          défendables et reproductibles, quel que soit le dossier. Parcourez
          chaque étape pour voir concrètement ce que nous faisons.
        </p>
      </Reveal>

      <div className="process-body">
        <div className="process-tabs">
          {steps.map((step, i) => (
            <button
              key={i}
              className={`process-tab ${activeStep === i ? 'active' : ''}`}
              onMouseEnter={() => setActiveStep(i)}
              onFocus={() => setActiveStep(i)}
              onClick={() => setActiveStep(i)}
            >
              <span className="tab-number">{step.number}</span>
              <span className="tab-text">
                <strong>{step.title}</strong>
                <small>{step.subtitle}</small>
              </span>
            </button>
          ))}
        </div>

        <div className="process-preview">
          <div className="preview-image-wrap">
            <img src={current.image} alt={current.title} className="preview-image" />
            <span className="preview-badge">{current.badge}</span>
          </div>
          <div className="preview-content">
            <h3>{current.title}</h3>
            <p>{current.description}</p>
            <div className="preview-meta">
              <div>
                <span className="meta-label">Livrable</span>
                <span className="meta-value">{current.livrable}</span>
              </div>
              <div>
                <span className="meta-label">Durée indicative</span>
                <span className="meta-value">{current.duree}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;