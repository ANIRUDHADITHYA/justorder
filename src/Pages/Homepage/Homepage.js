import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Homepage.css";
import Card from "../../Components/Cards/Card";
import SmallCards from "../../Components/Cards/SmallCards";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="homepage-container">
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
                    {/*
                    <div className="big-card">
                        <Card src={"/Asserts/Products/1.png"} name="Apple Airpods" />
                        <Card src={"/Asserts/Products/6.png"} name="Apple Airpods Max" />
                    </div>
                    <div className="small-card-container">
                        <div className="upper-small">
                            <div className="small-card-div">
                                <SmallCards src={"/Asserts/Products/2.png"} name="iWatch" price="1999." priceDecimal="99" />
                            </div>
                            <div className="small-card-div">
                                <SmallCards src={"/Asserts/Products/3.webp"} name="Phone Covers" price="499." priceDecimal="99" />
                            </div>
                        </div>
                        <div className="lower-small">
                            <div className="small-card-div">
                                <SmallCards src={"/Asserts/Products/4.png"} name="Screen Protector" price="349." priceDecimal="00" />
                            </div>
                            <div className="small-card-div">
                                <SmallCards src={"/Asserts/Products/5.png"} name="Phones" price="Starts @19999." priceDecimal="00" />
                            </div>
                        </div>
    </div>*/}
                </div>

            </section>
        </div>
    );
}

export default Homepage;
