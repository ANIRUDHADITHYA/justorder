import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Homepage.css";
import Card from "../../Components/Cards/Card";
import SmallCards from "../../Components/Cards/SmallCards";
import { Link } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import { Player } from '@lottiefiles/react-lottie-player';
import Footer from "../../Components/Footer/Footer";

const Homepage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isWhiteMode, setIsWhiteMode] = useState(false);

    const handleScroll = () => {
        const darkSection = document.getElementById("dark-section");
        const darkSectionTop = darkSection.offsetTop;
        const darkSectionHeight = darkSection.offsetHeight;
        const whiteSection = document.getElementById("white-section");
        const whiteSectionTop = whiteSection.offsetTop;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= darkSectionTop - darkSectionHeight / 2) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }

        // Change isWhiteMode to true if scrolled below the white section's top
        if (scrollPosition >= whiteSectionTop) {
            setIsWhiteMode(true);
        } else {
            setIsWhiteMode(false);
        }
    };




    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`homepage-container ${isDarkMode ? "dark-mode" : ""} ${isWhiteMode ? "dark-to-white" : ""}`}>
            <Navbar />
            <div className="carousel-container">
                <div className="carousel-content">
                    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" style={{ width: "11.11111111vw" }} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" style={{ width: "11.11111111vw" }} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" style={{ width: "11.11111111vw" }} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/Asserts/Carousel/2.webp" class="d-block w-100" alt="..." />

                                <div class="carousel-caption d-none d-md-block editCarousel">
                                    <h5 className="UHT2">Apple</h5>
                                    <p className="UDTSubtitle">Airpods</p>
                                    <p className="homeTemperature">Just Starts @RS.1000 only</p>
                                    <p className="shopBtn"><Link to="/products/tws/airpods"><span>Explore Now</span></Link></p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/Asserts/Carousel/2.webp" class="d-block w-100" alt="..." />

                                <div class="carousel-caption d-none d-md-block editCarousel">
                                    <h5 className="UHT2">Apple</h5>
                                    <p className="UDTSubtitle">iWatches</p>
                                    <p className="homeTemperature">Just Starts @RS.1500 only</p>
                                    <p className="shopBtn"><Link to="/products/watches/iwatches"><span>Explore Now</span></Link></p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/Asserts/Carousel/2.webp" class="d-block w-100" alt="..." />

                                <div class="carousel-caption d-none d-md-block editCarousel">
                                    <h5 className="UHT2">Smart Phones</h5>
                                    <p className="UDTSubtitle">All Accessories</p>
                                    <p className="homeTemperature">Cases | Custom Cover | Screen Gaurd</p>
                                    <p className="shopBtn"><Link to="/products/access"><span>Explore Now</span></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="popular-category">
                <h1>Our Popular Categories</h1>
                <ul className="shop-by-link">
                    <li>TWS</li>
                    <li>Watches</li>
                    <li>Covers</li>
                    <li>Screen Protectors</li>
                    <li>Mobiles</li>
                    <li>Laptops</li>
                </ul>
                <div className="popular-product-container">
                    <div className="upper-layer">
                        <div className="big-card"><Card src={"/Asserts/Products/1.png"} name="Apple Airpods" /></div>
                        <div className="small-card-div">
                            <SmallCards src={"/Asserts/Products/4.png"} name="Screen Protector" price="349." priceDecimal="00" />
                        </div>
                        <div className="small-card-div">
                            <SmallCards src={"/Asserts/Products/5.png"} name="Phones" price="Starts @19999." priceDecimal="00" />
                        </div>
                    </div>
                    <div className="lower-layer">
                        <div className="big-card"><Card src={"/Asserts/Products/6.png"} name="Apple Airpods Max" /></div>
                        <div className="small-card-div">
                            <SmallCards src={"/Asserts/Products/2.png"} name="iWatch" price="1999." priceDecimal="99" />
                        </div>
                        <div className="small-card-div">
                            <SmallCards src={"/Asserts/Products/3.webp"} name="Phone Covers" price="499." priceDecimal="99" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="dark-section" className="dark-section">
                <h3>Magical experience</h3>
                <h1><span className="glowing-text">Airpods Pro Clone</span><br />Master Copy</h1>
                <h3>Experience the Authentic Apple Airpods Pro Vibes – Instant Popup Connection, Battery Level Display, and More! 🎧🔋
                    <br />Ready to Elevate Your Audio? Secure Yours Today!</h3>
                <div className="airpods-desc">
                    <div className="video-section">
                        <video autoPlay loop muted>
                            <source src="/Asserts/Products/13.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="text-section">
                        <h1>Discover the Features</h1>
                        <ul>
                            <li className="airpods-intro">
                                <span>
                                    Introducing the Airpods Pro 2 - 2nd Generation - a Master Copy
                                    that brings you a seamless experience with fully operational features
                                    and remarkable sound quality enriched with deep Bass. While the microphone
                                    performance for calls is not exceptional, it delivers clear and manageable
                                    audio quality.
                                </span>
                            </li>
                            <li>Support both IOS and Android</li>
                            <li>Wireless Charging</li>
                            <li>Splash Proof</li>
                            <li>Charging Time 2-3 Hours</li>
                            <li>Battery backup of Charing Case upto 12-15 Hours</li>
                            <li>Battery Backup of earbuds upto 3 Hours</li>
                            <li>Active Noise Cancellation</li>
                        </ul>
                        <button>Explore More</button>
                    </div>
                </div>
            </section>
            <section className="white-section" id="white-section">
                <h1 className="most-sold">Most Sold</h1>
                <div className="slider-section">
                    <Slider />
                </div>
                <div className="justorder-features">
                    <h1 className="why-jo">Why JustTechify<span>.store</span> ?</h1>
                    <div className="features-container">
                        <div className="feature-card">
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/0106fb3c-c3eb-4d7b-a9bf-8567e12c0be0/6osOuVneX6.json"
                            >
                            </Player>
                            <h3>Best Quality</h3>
                            <p>Impeccable Craftsmanship, Elevating Standards Through the Master Copy's Quality</p>
                        </div>
                        <div className="feature-card">
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/9d5dd77e-6493-4df6-a3c3-7562cc8e302f/hqwRU9dDAb.json"
                            >
                            </Player>
                            <h3>Referral Bonus</h3>
                            <p>Earn a referral bonus by sharing products with friends. Enjoy bonuses in your account.</p>
                        </div>
                        <div className="feature-card span">
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/cdd8d138-79ef-44c2-81ec-8a2ab664eac8/ddbPeNpe8a.json"
                            >
                            </Player>
                            <h3>7 Days Replacement</h3>
                            <p>We offer replacements for cases like Color or Item Mismatch, 
                                and Damaged Items. T&C may be applicable.</p>
                        </div>
                        


                        <div className="feature-card">
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/ce502c73-2cc0-4725-96f0-7b05e5a97b0f/XS7nknqYTz.json"
                            >
                            </Player>
                            <h3>Fast Delivey</h3>
                            <p>Secure and Fast delivery all over India.</p>
                        </div>
                        <div className="feature-card">
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/471da03e-96b7-48f5-ba73-f88d1af37661/ZczG8rpS7e.json"
                            >
                            </Player>
                            <h3>Best Pricing</h3>
                            <p>Best Price for your Premium Products.</p>
                        </div>
                        <div className="feature-card">
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/78e7d98c-c724-4eaa-860d-2880a4966dbb/BQcxjI0ujq.json"
                            >
                            </Player>
                            <h3>Secure Checkouts</h3>
                            <p>More than 3 Payment Methods.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}


export default Homepage;
