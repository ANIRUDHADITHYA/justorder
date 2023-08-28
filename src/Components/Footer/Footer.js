import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-columns">
                <div className="footer-column-content">
                    <h1>JustOrder<span>.it</span></h1>
                    <p>Experience justorder.it, your go-to online shop for a variety of premium cloned products at budget-friendly prices, adding a touch of fun to your shopping. Explore our collection of cloned goods, as well as genuine imported phones, screen protectors, covers, and more mobile accessories to elevate your shopping journey.</p>
                </div>
                <div className="footer-column">
                    <h1>Information</h1>
                    <ul>
                        <li><Link to="">Terms and Condition</Link></li>
                        <li><Link to="">Refund Policy</Link></li>
                        <li><Link to="">Customer Replacement Policy</Link></li>
                        <li><Link to="">Referral Policy</Link></li>
                        <li><Link to="">Delivey and Charges</Link></li>
                        <li><Link to="">FAQ</Link></li>
                    </ul>
                </div>
                <div className="footer-column span">
                    <div>
                        <h1>Need help?</h1>
                        <ul>
                            <li><i class="fa-regular fa-envelope"></i> <Link to="">Create a Ticket</Link></li>
                            <li><i class="fa-brands fa-whatsapp"></i> <Link to="">+91 99999 99999</Link></li>
                            <li><i class="fa-solid fa-at"></i> <Link to="">support@justorder.it</Link></li>
                        </ul>
                    </div>
                    <div className='follow-us-section'>
                        <h1>Follow us</h1>
                        <ul className="socialIcon">
                            <li><Link to="#" style={{marginLeft:"0px"}}><i className="fa-brands fa-facebook-square"></i></Link></li>
                            <li><Link to="#" ><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link to="#" ><i class="fa-brands fa-whatsapp"></i></Link></li>
                            <li><Link to="#" ><i className="fa-brands fa-telegram"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2023 justorder.it. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
