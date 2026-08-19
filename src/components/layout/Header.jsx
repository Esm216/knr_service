import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import logo from '../../assets/logon.png';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-topbar">
        <div className="topbar-inner">
          <div className="topbar-contact">
            <span><FiMapPin /> Fidjrossè, Cotonou, Bénin</span>
            <span><FiMail /> contact@knrservicebenin.com</span>
            <span><FiPhone /> +229 01 97 00 00 00</span>
          </div>
          <div className="topbar-hours">
            Lundi - Vendredi : 08h00 – 19h00 &nbsp;·&nbsp; Samedi : 09h00 – 13h00
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="header-main-inner">
          <NavLink to="/" className="header-logo">
            <img src={logo} alt="KNR Services Bénin" />
          </NavLink>

          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>
              Accueil
            </NavLink>
            <NavLink to="/expertise-services" className={({isActive}) => isActive ? 'active' : ''}>
              Expertise & Services
            </NavLink>
            <NavLink to="/a-propos" className={({isActive}) => isActive ? 'active' : ''}>
              A propos
            </NavLink>
            <NavLink to="/sigmi" className={({isActive}) => isActive ? 'active' : ''}>
              SIGMI
            </NavLink>
            <NavLink to="/realisations" className={({isActive}) => isActive ? 'active' : ''}>
              Réalisations
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </nav>

          <button className="btn-devis">Demander un devis</button>

          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;