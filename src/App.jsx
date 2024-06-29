import './App.css'
import Hero from "./components/hero/Hero.jsx";
import Nav from "./components/nav/Nav.jsx"
import Trending from "./components/trending/Trending.jsx";
import Featured from "./components/featured/Featured.jsx";
import Leaderboard from "./components/leadboard/Leadboard.jsx";
import Explore from "./components/explore/Explore.jsx";

function App() {

  return (
    <div className="wrapper">
        <Nav/>
        <Hero/>
        <Trending/>
        <Featured/>
        <Leaderboard/>
        <Explore/>
    </div>
  )
}

export default App
