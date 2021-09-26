//Header area
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <h1>Make The Best Concert</h1>
            <p>Legendary singers from all aound the world unites to make an epic show</p>
            <h3>Total Budget: <span className="budget-color">500 Million</span></h3>
        </div>
    );
};

export default Header;