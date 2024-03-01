import React, { useState} from 'react';
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
          <li>Lista Masive</li>
          <li>Lista Monumente</li>
          <li>Stoc Masive</li>
          <li>Stoc Monumente</li>
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