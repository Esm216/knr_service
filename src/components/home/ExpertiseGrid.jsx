import Reveal from '../common/Reveal';
import { FiSearch, FiCompass, FiClipboard, FiHome, FiFileText, FiShield, FiZap } from 'react-icons/fi';
import './ExpertiseGrid.css';

const expertises = [
  {
    icon: <FiSearch />,
    title: 'Expertise en construction',
    desc: 'Un avis technique indépendant sur la qualité, la conformité et la solidité de votre ouvrage.',
  },
  {
    icon: <FiCompass />,
    title: 'Ingénierie & études techniques',
    desc: 'Études de structures, notes de calcul et dimensionnement de vos projets de bâtiment.',
  },
  {
    icon: <FiClipboard />,
    title: 'Diagnostic technique du bâti',
    desc: 'Identification des causes réelles des fissures, infiltrations et pathologies du bâtiment.',
  },
  {
    icon: <FiHome />,
    title: 'Suivi & contrôle de chantier',
    desc: 'Un œil technique permanent sur votre chantier : qualité, délais et dépenses maîtrisés.',
  },
  {
    icon: <FiFileText />,
    title: 'Assistance aux projets immobiliers',
    desc: 'Un accompagnement de bout en bout, du choix du terrain à la remise des clés.',
  },
  {
    icon: <FiShield />,
    title: 'Expertise après sinistre',
    desc: 'Évaluation rapide et impartiale des dommages après incendie, inondation ou effondrement.',
  },
  {
    icon: <FiZap />,
    title: 'Conseil en construction',
    desc: 'Des réponses techniques claires pour décider en connaissance de cause.',
  },
];

function ExpertiseGrid() {
  return (
    <section className="expertise-section">
      <Reveal className="expertise-header">
        <span className="eyebrow">Nos domaines d'expertise</span>
        <h2>Sept métiers complémentaires pour sécuriser vos ouvrages</h2>
        <p>
          De l'étude de structure au diagnostic après sinistre, nos missions
          couvrent l'ensemble du cycle de vie d'un bâtiment.
        </p>
      </Reveal>

      <div className="expertise-grid">
        {expertises.map((item, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="expertise-card">
              <div className="expertise-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#" className="link-arrow-sm">En savoir plus <span>→</span></a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default ExpertiseGrid;