import "./Index.css"
import "../components/featured/Featured.css"
import {FaEthereum} from "react-icons/fa";


const Cards = ({card, cardType}) => {
    return (
        <div key={card.id} data-card-type={cardType} className="card">
            <img src={card.img} alt="card image"/>
            {
                cardType === "horizontal" ?
                    <div className="card-body">
                        <h4>{card.title} #{card.id}</h4>
                        <div className="users">
                            <div className="user-info">
                                <img src={card.userImg} alt="User image"/>
                                <span>{card.username}</span>
                            </div>
                            <div className="nft">
                                <p>Current Bid</p>
                                <span><FaEthereum/> {card.current}</span>
                            </div>
                        </div>
                    </div> :
                    <div className=" card-ver">
                        <div className="user-info">
                            <img src={card.userImg} alt="User image"/>
                            <span>{card.username}</span>
                        </div>
                       <div>
                           <h4>{card.title} #{card.id}</h4>
                           <span>Description</span>
                           <p>{card.description}</p>
                           <div className="coins">
                               <div>
                                   <p>Current Bid</p>
                                   <span><FaEthereum/> {card.current}</span>
                               </div>
                               <div>
                                   <p>End In</p>
                                   <span>{card.hour}</span>
                               </div>
                           </div>
                       </div>
                    </div>
            }
        </div>
    )
}
export default Cards
