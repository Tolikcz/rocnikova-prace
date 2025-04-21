import React from 'react';
import '../styles/App.css';

const NavBar = ({ setCurrentPage }) => (
  <header>
    <h1>Umístění bazénu</h1>
    <nav>
      <ul>
        <li><a href="#home"       onClick={() => setCurrentPage('o nas')}>O nás</a></li>
        <li><a href="#rezervace"  onClick={() => setCurrentPage('rezervace')}>Rezervace dráhy</a></li>
        <li><a href="#galerie"    onClick={() => setCurrentPage('galerie')}>Galerie</a></li>
        <li><a href="#lokace"     onClick={() => setCurrentPage('lokace')}>Lokace</a></li>
        <li><a href="#restaurace" onClick={() => setCurrentPage('restaurace')}>Restaurace</a></li>
      </ul>
    </nav>
  </header>
);

export default NavBar;