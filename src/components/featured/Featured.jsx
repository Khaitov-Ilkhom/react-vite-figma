import "./Featured.css"
import { collection } from "../../db/index.js";
import Index from "../../utils/Index.jsx";
import {GiCelebrationFire} from "react-icons/gi";

const Featured = () => {
    return (
        <div className="container">
            <div>
                <h2 className="center">Featured Collections</h2>
                <div className="cards">
                    {
                        collection.map(card =>
                            <Index card={card} cardType={"vertical"}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Featured
