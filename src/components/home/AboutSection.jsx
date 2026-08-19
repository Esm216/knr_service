import Reveal from '../common/Reveal';
import teamImg from '../../assets/C1.jpg'; // à remplacer par ton export
import './AboutSection.css';

const trustTags = [
  'Particuliers',
  'Promoteurs immobiliers',
  'Entreprises',
  'Banques',
  'Collectivités',
  'Architectes & ingénieurs',
  'Diaspora béninoise',
];

function AboutSection() {
  return (
    <section className="about-section">
      <Reveal className="about-image-wrap">
        <img src={teamImg} alt="Équipe KNR sur chantier" className="about-image" />
        <div className="about-badge">
          <span className="badge-year">2018</span>
          <span className="badge-text">Année de création de KNR Service Bénin</span>
        </div>
      </Reveal>

      <Reveal delay={150} className="about-content">
        <span className="eyebrow">Qui sommes-nous</span>
        <h2>
          Un cabinet d'expertise indépendant au service de la qualité du bâti béninois
        </h2>
        <p>
          KNR Expertises connue commercialement sous le nom KNR Services Bénin
          réunit des ingénieurs civils et des experts en pathologie du bâtiment.
          Nous apportons un regard technique neutre à ceux qui construisent,
          achètent, financent ou entretiennent des ouvrages au Bénin.
        </p>
        <p>
          Nous ne réalisons aucun travaux : cette indépendance garantit que nos
          conclusions ne servent que l'intérêt de nos clients. Nous développons
          par ailleurs SIGMI, une plateforme dédiée à la gestion et à la
          maintenance des infrastructures.
        </p>

        <span className="trust-label">Ils nous font confiance</span>
        <div className="trust-tags">
          {trustTags.map((tag, i) => (
            <span key={i} className="trust-tag">{tag}</span>
          ))}
        </div>

        <a href="/a-propos" className="link-arrow">
          En savoir plus sur KNR <span>→</span>
        </a>
      </Reveal>
    </section>
  );
}

export default AboutSection;