import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Products.css"
import { useParams } from "react-router-dom";
const Product = () => {
    const { product_id } = useParams();
    console.log(product_id)
    return (
        <div className="product-page-section">
            <Navbar />
            <div className="product-inner-section">
                <div className="product-overview-main-container">
                    <div className="product-image-section">
                        <div className="main-product-img-container">
                            <img src="/Asserts/Products/1.png" alt="main-img"></img>
                        </div>
                        <div className="sub-product-images-container">
                            <div className="sub-product-img-container">
                                <img src="/Asserts/Products/2.png" alt="sub-img"></img>
                            </div>
                            <div className="sub-product-img-container">
                                <img src="/Asserts/Products/6.png" alt="sub-img"></img>
                            </div>
                            <div className="sub-product-img-container">
                                <img src="/Asserts/Products/5.png" alt="sub-img"></img>
                            </div>
                            <div className="sub-product-img-container">
                                <img src="/Asserts/Products/3.webp" alt="sub-img"></img>
                            </div>
                        </div>
                    </div>
                    <div className="product-overview-section">
                        <ul className="product-directory-path">
                            <li><span>Home</span> <i class="fa-solid fa-chevron-right"></i></li>
                            <li><span>Earphones and TWS</span> <i class="fa-solid fa-chevron-right"></i></li>
                            <li><span>Airpods</span> <i class="fa-solid fa-chevron-right"></i></li>
                            <li><span>Airpods Pro</span></li>
                        </ul>
                        <div className="product-overview-container">
                            <h2 className="product-overview-title">APPLE AirPods Pro (2nd generation) Bluetooth Headset  (White, True Wireless)</h2>
                            <div className="product-overview-rating-review">
                                <div className="product-overview-rating"><h6>5</h6><i class="fa-solid fa-star"></i></div>
                                <h6 className="product-overview-review">400 Reviews</h6>
                            </div>
                            <div className="product-highlights">
                                <h6>Product Highlights</h6>
                                <ul>
                                    <li>With Mic:Yes</li>
                                    <li>Connector type: No</li>
                                    <li>Active Noise Cancellation reduces unwanted background noise</li>
                                    <li>Adaptive Transparency lets outside sounds in while reducing loud environmental noiseWith Mic:Yes</li>
                                    <li>Personalised Spatial Audio with dynamic head tracking places sound all around you</li>
                                </ul>
                            </div>
                            <div className="product-description">
                                <h6>Product Description</h6>
                                <p>
                                    AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Transparency,
                                    and Personalised Spatial Audio with dynamic head tracking for
                                    immersive sound. Now with multiple ear tips (XS, S, M, L) and up to 6
                                    hours of listening time.
                                </p>
                            </div>
                            <div className="product-highlights">
                                <h6>Services</h6>
                                <p><i class="fa-solid fa-truck"></i>Free Delivery</p>
                                <p><i class="fa-solid fa-arrows-rotate"></i>7 days Replacement (T&C may apply)</p>
                            </div>
                            <div className="product-overview-pricing"><h4>₹1,999.00</h4><h5><s>₹3,000.00</s></h5><h5><span>25% off</span></h5></div>
                            <div className="product-cart-buy">
                                <button className="product-button cart"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                                <button className="product-button buy"><i class="fa-solid fa-bag-shopping"></i> Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-review-container">
                    <div className="product-review-header">
                        <h1>Product Reviews</h1>
                        <button>Rate this Product</button>
                    </div>
                    <div className="product-review-body">
                        <div className="product-overview-rating-review review">
                            <div className="product-overview-rating"><h6>5</h6><i class="fa-solid fa-star"></i></div>
                            <h4>Highly recommended Product</h4>
                            <div className="review-like-section">
                                <h4><i class="fa-solid fa-thumbs-up"></i> <span>100</span></h4>
                                <h4><i class="fa-solid fa-thumbs-down"></i> <span>20</span></h4>
                            </div>
                        </div>
                        <div className="review-body">
                            <p>One word enough for review- Awesome One of the best ANC i ever experienced. Sound quality is also top notch.</p>
                            <div className="review-image-container">
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image1"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image2"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image3"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image4"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image5"></img>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="product-review-body">
                        <div className="product-overview-rating-review review">
                            <div className="product-overview-rating"><h6>5</h6><i class="fa-solid fa-star"></i></div>
                            <h4>Highly recommended Product</h4>
                            <div className="review-like-section">
                                <h4><i class="fa-solid fa-thumbs-up"></i> <span>100</span></h4>
                                <h4><i class="fa-solid fa-thumbs-down"></i> <span>20</span></h4>
                            </div>
                        </div>
                        <div className="review-body">
                            <p>One word enough for review- Awesome One of the best ANC i ever experienced. Sound quality is also top notch.</p>
                            <div className="review-image-container">
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image1"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image2"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image3"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image4"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image5"></img>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="product-review-body">
                        <div className="product-overview-rating-review review">
                            <div className="product-overview-rating"><h6>5</h6><i class="fa-solid fa-star"></i></div>
                            <h4>Highly recommended Product</h4>
                            <div className="review-like-section">
                                <h4><i class="fa-solid fa-thumbs-up"></i> <span>100</span></h4>
                                <h4><i class="fa-solid fa-thumbs-down"></i> <span>20</span></h4>
                            </div>
                        </div>
                        <div className="review-body">
                            <p>One word enough for review- Awesome One of the best ANC i ever experienced. Sound quality is also top notch.</p>
                            <div className="review-image-container">
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image1"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image2"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image3"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image4"></img>
                                </div>
                                <div className="review-image-wrapper">
                                    <img src="/Asserts/Products/1.png" alt="image5"></img>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                

            </div>

            <Footer/>

        </div>
    )
}

export default Product;