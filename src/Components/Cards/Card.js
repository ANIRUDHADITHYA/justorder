import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
    return (
        <div class="card-container">
            <div class="single-card">
                <div class="imgBx">
                    <img src={props.src} alt=""/>
                </div>
                <div class="contentBx">
                    <h2>{props.name}</h2>
                    {/*   <div class="size">
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>*/}
                    <div class="color">
                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Link to="/" >Buy Now</Link>
                </div>
            </div>
        </div>

    )
}


export default Card;