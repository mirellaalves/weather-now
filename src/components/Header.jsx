import React from 'react';
import './Header.css';
import logo from "../images/logo.svg";

const Header = () => {
    return (
        <header className="header">
            <img className="weathernowLogo" alt="Weather Now Logo" src={logo} />
        </header>
    )
};

export default Header;
