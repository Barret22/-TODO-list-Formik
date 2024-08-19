import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header className="header">
        <nav>
            <Link to="/">Головна</Link>
            <Link to="/contacts">Контакти</Link>
            <Link to="/about">Про мене</Link>
        </nav>
    </header>
);

export default Header;
