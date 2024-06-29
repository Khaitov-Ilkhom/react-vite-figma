import "./Hero.css"
import heroImg from "../../images/hero.png"
import { FaWallet } from "react-icons/fa";


const Hero = () => {

    return (
        <div className="container">
            <div className="hero">
                <div className="hero-content">
                    <h5>WEB 3 NON-FUNGIBLE TOKENS</h5>
                    <h2>Unlock Unique Digital Ownership with NFTs</h2>
                    <p>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p>
                    <button className="btn"><FaWallet/> Connect Wallet</button>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Hero