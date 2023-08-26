import { Link } from "react-router-dom";
import "./Card.css"


const SmallCards = (props) => {
    return (
        <div class="small-card">

            <div class="small-imgBox">
                <img src={props.src} alt="mouse orsair" class="mouse" />
            </div>

            <div class="small-contentBox">
                <h3>{props.name}</h3>
                <h2 class="card-price">{props.price}<small>{props.priceDecimal}</small> ₹</h2>
                <Link to="/" class="buy">Buy Now</Link>
            </div>

        </div>
    )
}


export default SmallCards;