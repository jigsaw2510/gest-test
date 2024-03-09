import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
	return (
			<nav>
      <div className="container">
        <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Monumente</Link></li>
          <li><Link to="/About" onClick={() => setMenuOpen(false)}>Masive</Link></li>
          <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Istoric Modificari</Link></li>
        </ul>
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
	);
}

export default Navigation;