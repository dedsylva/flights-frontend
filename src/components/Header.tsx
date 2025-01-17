import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/flights" className="link">
          Flights
        </Link>
        <Link to="/balances" className="link">
          Wallet
        </Link>
      </nav>
    </header>
  );
};

export default Header;
