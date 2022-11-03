import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/joke">Jokes</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
