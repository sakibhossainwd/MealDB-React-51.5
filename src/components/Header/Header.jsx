// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <h2>MEAL-DB</h2>
                </div>
                <div className="input">
                    <input type="text" placeholder='search your food' />
                    <button>Search</button>
                </div>
                <div className="info">
                    <a href="#">Home</a>
                    <a href="#">Our Meal</a>
                    <a href="#">Offers</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;