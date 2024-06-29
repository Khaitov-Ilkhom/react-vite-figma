import "./Trending.css"
import { trendingCard } from "../../db/index.js";
import Index from "../../utils/Index.jsx";
import { GiCelebrationFire } from "react-icons/gi";

const Trending = () => {
    return (
        <div className="container">
            <div>
                <h2 className="left">Trending Art <span style={{color: "orange"}}><GiCelebrationFire/></span></h2>
                <div className="cards">
                    {
                        trendingCard.map(card =>
                            <Index card={card} cardType={"horizontal"}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Trending
