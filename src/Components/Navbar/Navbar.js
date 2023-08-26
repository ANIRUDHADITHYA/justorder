import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h4>JustOrder<span>.it</span></h4>
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li>Apple Airpods</li>
                        <li>Apple Watches</li>
                        <li>Imported Phones</li>
                        <li>Other Products</li>
                    </ul>
                </div>
                <div className="navbar-icons">
                    <div className="icon-container">
                        <img src="/Asserts/Icons/search.png" alt="search" />
                    </div>
                    <div className="icon-container cart-icon-container">
                        <img src="/Asserts/Icons/cart.png" alt="cart" />
                        <span className="cart-item-count">8</span>
                    </div>
                    <div className="icon-container">
                        <img src="/Asserts/Icons/user.png" alt="user" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
