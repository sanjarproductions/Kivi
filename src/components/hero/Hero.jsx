import "./Hero.css"
import HeroBg from "../../img/hero-bg.svg"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <img className="heo-bgimg" src={HeroBg} alt="HeroBg" />
          <div className="hero-text">
            <h1>Where Creativity Meets Kivi</h1>
            <p>Discover a universe where creativity flourishes, turning ideas into digital marvels. We transform visions into inspiring digital monuments, sculpting dreams into reality</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
