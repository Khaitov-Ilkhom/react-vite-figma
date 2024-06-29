import "./Nav.css"
import logo1 from '../../images/navlogo1.svg'
import logo2 from '../../images/navlogo2.svg'
import logo3 from '../../images/navlogo3.svg'
import { BiSearchAlt } from "react-icons/bi";

const Nav = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="logo">
                    <img src={logo1} alt="Nav Logo"/>
                    <img src={logo2} alt="Nav Logo"/>
                    <img src={logo3} alt="Nav Logo"/>
                </div>
                <div className="search">
                    <span><BiSearchAlt/></span>
                    <input type="text" placeholder="Search"/>
                </div>
                <ul className="nav-link">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Faq</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav
