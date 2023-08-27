import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const PopularCard = () => {

    return (
        <div className="popular-container">
            <div className="popular-card">
                <div className="popular-imgBx">
                    <img src="/Asserts/Products/6.png" alt="nike-air-shoe" />
                </div>

                <div className="popular-contentBx">

                    <h2>Apple Airpods Pro</h2>

                    <h6>Master Copy</h6>

                    <div className="popular-color">

                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Link to="#">Buy Now</Link>
                </div>

            </div>
        </div>
    )
}

export default PopularCard;
