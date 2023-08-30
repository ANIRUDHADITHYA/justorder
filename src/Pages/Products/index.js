import React, { useState } from 'react';
import './Products.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import ProductCard from '../../Components/Cards/ProductCard';

const Products = () => {
    const [filterBar, setFilterBar] = useState(false);
    function handleFilterOutsider() {
        if (filterBar) {
            setFilterBar(false)
        }
    }
    function handleFilterClick() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Add smooth scrolling behavior
          });
          setFilterBar(true)
    }
    return (
        <div className={`product-page ${filterBar ? 'active' : ''}`}>
            <Navbar />
            <div className="product-container">
                <div className={`product-filter ${filterBar ? 'active' : ''}`}>
                    <div className="filter-columns">
                        <div className='filter-column'>
                            <div className='filter-close-button'>
                                <button onClick={() => { setFilterBar(false) }}><i class="fa-solid fa-xmark"></i> Close</button>
                            </div>
                            <div className='filter-header'>
                                <h4>Filters Used</h4>
                                <button>CLEAR ALL</button>
                            </div>
                            <div className='filter-tags'>
                                <div className='filter-tag'>
                                    <i class="fa-solid fa-xmark"></i>
                                    <p>Min-₹20000</p>
                                </div>
                                <div className='filter-tag'>
                                    <i class="fa-solid fa-xmark"></i>
                                    <p>SAMSUNG</p>
                                </div>
                                <div className='filter-tag'>
                                    <i class="fa-solid fa-xmark"></i>
                                    <p>S</p>
                                </div>
                                <div className='filter-tag'>
                                    <i class="fa-solid fa-xmark"></i>
                                    <p>XL</p>
                                </div>
                            </div>
                        </div>
                        <div className='filter-column'>
                            <div className='filter-header main'>
                                <h5>CATEGORIES</h5>
                                <div className='selected-category'>
                                    <div className='main-category'><i class="fa-solid fa-caret-right"></i><h6>TWS and Earphones</h6></div>
                                    <div className='sub-category'>
                                        <Link to="">Airpods</Link>
                                        <Link to="">Earbuds</Link>
                                        <Link to="">Neck Bank</Link>
                                        <Link to="">Buds</Link>
                                    </div>
                                </div>
                                <div className='selected-category'>
                                    <div className='main-category'><i class="fa-solid fa-caret-right"></i><h6>TWS and Earphones</h6></div>
                                    <div className='sub-category'>
                                        <Link to="">Airpods</Link>
                                        <Link to="">Earbuds</Link>
                                        <Link to="">Neck Bank</Link>
                                        <Link to="">Buds</Link>
                                    </div>
                                </div>
                                <div className='selected-category'>
                                    <div className='main-category'><i class="fa-solid fa-caret-right"></i><h6>TWS and Earphones</h6></div>
                                    <div className='sub-category'>
                                        <Link to="">Airpods</Link>
                                        <Link to="">Earbuds</Link>
                                        <Link to="">Neck Bank</Link>
                                        <Link to="">Buds</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-column'>
                            <div className='filter-header main oc'>
                                <h5>OTHER CATEGORIES</h5>
                                <div className='filter-tags'>
                                    <div className='filter-tag oc'>
                                        <i class="fa-solid fa-caret-right"></i>
                                        <p>Mobiles</p>
                                    </div>
                                    <div className='filter-tag oc'>
                                        <i class="fa-solid fa-caret-right"></i>
                                        <p>TWS</p>
                                    </div>
                                    <div className='filter-tag oc'>
                                        <i class="fa-solid fa-caret-right"></i>
                                        <p>Covers</p>
                                    </div>
                                    <div className='filter-tag oc'>
                                        <i class="fa-solid fa-caret-right"></i>
                                        <p>Protectors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-column'>
                            <div className='filter-header main'>
                                <h5>PRICE RANGE</h5>
                                <div>
                                    <p>----------------</p>
                                </div>
                            </div>
                        </div>

                        <div className='filter-column'>
                            <div className='filter-header main'>
                                <h5>BRAND</h5>
                                <div className='brand-filter'>
                                    <div className='brand-checkbox'>
                                        <input type="checkbox" id="samsung" name="samsung" value="Bike" />
                                        <label for="samsung"> Samsung</label>
                                    </div>
                                    <div className='brand-checkbox'>
                                        <input type="checkbox" id="apple" name="apple" value="Car" />
                                        <label for="apple"> Apple</label>
                                    </div>
                                    <div className='brand-checkbox'>
                                        <input type="checkbox" id="google_pixel" name="google_pixel" value="Boat" />
                                        <label for="google_pixel"> Google Pixel</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`product-section ${filterBar ? "active" : ""}`} onClick={handleFilterOutsider}>

                    <div className='filter-results-header'>
                        <h4>Shows 30 Products from "airpods"</h4>
                    </div>
                    <div className='filter-button' onClick={handleFilterClick}><h5><i class="fa-solid fa-filter"></i> Open Filter</h5></div>

                    <div className='filter-results'>

                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Products;
