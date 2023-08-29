import "./Card.css"



const ProductCard = () => {
    return (
        <div className="product-card-container">
            <div className="product-image-container"><img src="/Asserts/Products/1.png" alt="airpods"></img></div>
            <div className="product-info-container">
                <h3 className="product-card-title">Apple Airpods Pro Original 1:1 Copy, ANC, ENC, Mic 3Hrs Playtime </h3>
                <div className="product-review-rating">
                    <div className="rating-container green"><h6>5</h6><i class="fa-solid fa-star"></i></div>
                    <h6 className="review-container">400 Reviews</h6>
                </div>
                <div className="product-pricing"><h4>₹1,999.00</h4><h5><s>₹3,000.00</s></h5><h6>25% off</h6></div>
            </div>
        </div>
    )
}


export default ProductCard;