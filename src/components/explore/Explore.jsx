import "./Explore.css"
import { explore } from "../../db/index.js";
import Index from "../../utils/Index.jsx";

const Explore = () => {
    return (
        <div className="container">
            <div>
                <h2 className="left">Explore</h2>
                <div className="cards">
                    {
                        explore.map(card =>
                            <Index card={card} cardType={"horizontal"}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Explore
