import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pokemon-23.svg';
import FlipSwitch from './ui/FlipSwitch';

const Navbar = () => (
  <>
    <div className="navbar-container">
      <div>
        <FlipSwitch />
        <Link to="/">
          <img
            className="pokemon-logo"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
    </div>
  </>
);

export default Navbar;
