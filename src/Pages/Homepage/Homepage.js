import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="homepage-container">
            <Navbar />
            <div className="carousel-container">
                <div className="carousel-content">
                    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" style={{ width: "11.11111111vw"}} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" style={{ width: "11.11111111vw"}} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" style={{ width: "11.11111111vw"}} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/Asserts/Carousel/2.webp" class="d-block w-100" alt="..." />

                                <div class="carousel-caption d-none d-md-block editCarousel">
                                    <h5 className="UHT2">Apple</h5>
                                    <p className="UDTSubtitle">Airpods</p>
                                    <p className="homeTemperature">Just Starts @RS.1000 only</p>
                                    <p className="shopBtn"><a href="/products/tws/airpods"><span>Explore Now</span></a></p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/Asserts/Carousel/2.webp" class="d-block w-100" alt="..." />

                                <div class="carousel-caption d-none d-md-block editCarousel">
                                    <h5 className="UHT2">Apple</h5>
                                    <p className="UDTSubtitle">iWatches</p>
                                    <p className="homeTemperature">Just Starts @RS.1500 only</p>
                                    <p className="shopBtn"><a href="/products/watches/iwatches"><span>Explore Now</span></a></p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/Asserts/Carousel/2.webp" class="d-block w-100" alt="..." />

                                <div class="carousel-caption d-none d-md-block editCarousel">
                                    <h5 className="UHT2">Smart Phones</h5>
                                    <p className="UDTSubtitle">All Accessories</p>
                                    <p className="homeTemperature">Cases | Custom Cover | Screen Gaurd</p>
                                    <p className="shopBtn"><a href="/products/access"><span>Explore Now</span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
