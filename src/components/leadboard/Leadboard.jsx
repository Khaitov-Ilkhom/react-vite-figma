import "./Leadboard.css"
import {leaderboard} from "../../db/index.js";
import {FaEthereum} from "react-icons/fa";
const Leaderboard = () => {
    return (
        <div className="container">
            <div>
                <h2 className="center">Leaderboard of the Week</h2>
                <div className="user-cards">
                    {
                        leaderboard.map(card =>
                            <div>
                                <img src={card.img} alt="User image"/>
                                <h4>{card.title}</h4>
                                <p><FaEthereum/> {card.current}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Leaderboard
