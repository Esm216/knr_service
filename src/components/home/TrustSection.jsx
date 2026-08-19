import Reveal from '../common/Reveal';
import { FiShield, FiTool, FiFileText, FiGlobe, FiClock, FiUser } from 'react-icons/fi';
import proofImg from '../../assets/C2.jpg'; // à remplacer par ton export
import './TrustSection.css';

const points = [
  {
    icon: <FiShield />,
    title: 'Une indépendance totale',
    desc: "Nous n'exécutons aucun travaux et n'avons aucun lien avec les entreprises de bâtiment.",
  },
  {
    icon: <FiTool />,
    title: 'Des méthodes instrumentées',
    desc: 'Sclérométrie, détection d\'armatures, humidimétrie, pose de témoins : nous mesurons avant d\'affirmer.',
  },
  {
    icon: <FiFileText />,
    title: 'Des rapports exploitables',
    desc: 'Documents clairs, illustrés et argumentés, utilisables face à une entreprise, un assureur ou un juge.',
  },
  {
    icon: <FiGlobe />,
    title: 'Une offre pensée pour la diaspora',
    desc: 'Comptes rendus photographiés et points en visioconférence pour suivre son chantier depuis l\'étranger.',
  },
  {
    icon: <FiClock />,
    title: 'Une réactivité réelle',
    desc: "Devis sous 48 heures, intervention d'urgence sous 24 à 72 heures en cas de sinistre.",
  },
  {
    icon: <FiUser />,
    title: 'Un accompagnement humain',
    desc: 'Un interlocuteur unique, disponible, qui vulgarise chaque enjeu technique de votre dossier.',
  },
];

function TrustSection() {
  return (
    <section className="trust-section">
      <Reveal className="trust-image-wrap">
        <img src={proofImg} alt="Contrôle technique sur chantier" className="trust-image" />
      </Reveal>

      <div className="trust-content">
        <Reveal>
          <span className="eyebrow">Pourquoi choisir KNR</span>
          <h2>La confiance se construit sur des preuves, pas sur des promesses</h2>
          <p>
            Nos clients nous confient des décisions engagées : acheter,
            construire, réparer ou renoncer. Nous leur devons une méthode
            rigoureuse et une parole libre.
          </p>
        </Reveal>

        <div className="trust-points-grid">
          {points.map((point, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="trust-point">
                <div className="trust-point-icon">{point.icon}</div>
                <h4>{point.title}</h4>
                <p>{point.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;