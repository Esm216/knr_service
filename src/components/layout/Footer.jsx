import { NavLink } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="KNR Services Bénin" className="footer-logo" />
          <p>
            Bâtir l'excellence, façonner l'avenir. Votre partenaire de
            confiance pour tous vos projets immobiliers, de construction
            et de rénovation au Bénin.
          </p>
          <ul className="footer-contact">
            <li><FiMapPin /> Cotonou, Bénin</li>
            <li><FiPhone /> 00229 01 96 05 07 96</li>
            <li><FiMail /> contact@knr-expertises.com</li>
            <li><FiClock /> Lun – Sam : 8h00 – 18h00</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Liens Rapides</h4>
          <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/a-propos">À propos</NavLink></li>
            <li><NavLink to="/expertise-services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/contact">Demander un devis</NavLink></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Restez informé de nos dernières réalisations et actualités.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Votre adresse email" required />
            <button type="submit">
              S'inscrire <FiArrowRight />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 KNR Services Bénin. Tous droits réservés.</span>
        <div className="footer-legal">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/confidentialite">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;