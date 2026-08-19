import Reveal from '../common/Reveal';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import img1 from '../../assets/M1.jpg'; // à remplacer par tes exports
import img2 from '../../assets/M2.jpg';
import img3 from '../../assets/M3.jpg';
import './RealisationsSection.css';

const realisations = [
  {
    badge: 'Suivi de chantier',
    image: img1,
    location: 'Akpakpa, Cotonou',
    year: '2024',
    title: 'Résidence Les Palmiers 12 logements',
    desc: "Un promoteur privé développe un immeuble R+2 de douze appartements destinés à la location, avec un budget serré et un délai de commercialisation contraint.",
  },
  {
    badge: 'Ingénierie & contrôle',
    image: img2,
    location: 'Abomey-Calavi',
    year: '2023',
    title: 'Groupe scolaire public 9 salles de classe',
    desc: "Une collectivité locale souhaite construire un groupe scolaire sur un terrain partiellement inondable, dans le cadre d'un financement à échéance fixe.",
  },
  {
    badge: 'Expertise après sinistre',
    image: img3,
    location: 'Godomey',
    year: '2024',
    title: 'Expertise après effondrement partiel',
    desc: "Effondrement partiel d'un plancher haut dans un immeuble commercial de deux niveaux, sans victime mais avec une activité totalement interrompue.",
  },
];

function RealisationsSection() {
  return (
    <section className="realisations-section">
      <div className="realisations-header">
        <Reveal>
          <span className="eyebrow">Nos réalisations</span>
          <h2>Des missions concrètes, des résultats mesurables</h2>
          <p>
            Chaque dossier est documenté : le contexte, la difficulté
            rencontrée, notre intervention et le bénéfice obtenu pour le client.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <a href="/realisations" className="btn-outline-dark">
            Voir toutes les réalisations <FiArrowRight />
          </a>
        </Reveal>
      </div>

      <div className="realisations-grid">
        {realisations.map((item, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="realisation-card">
              <div className="realisation-image-wrap">
                <img src={item.image} alt={item.title} />
                <span className="realisation-badge">{item.badge}</span>
              </div>
              <div className="realisation-body">
                <span className="realisation-meta">
                  <FiMapPin /> {item.location} &nbsp;·&nbsp; {item.year}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default RealisationsSection;