import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h4><Link to="/">JustTechify<span>.store</span></Link></h4>
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li><Link to="/products">All Products</Link></li>
                        <li><Link to="/products">Apple Airpods</Link></li>
                        <li><Link to="/products">Apple Watches</Link></li>
                        <li><Link to="/products">Imported Phones</Link></li>
                        <li><Link to="/products">Accessories</Link></li>
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
