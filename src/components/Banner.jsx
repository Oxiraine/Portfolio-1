import HeroImg from "../assets/image-homepage-hero.jpg";
import ArrowsDown from "../assets/down-arrows.svg";
function Banner() {
  return (
    <>
      <div className="hero-container">
        <img src={HeroImg} className="banner-hero" alt="hero" />

        <div className="hero-text-area">
          <h1>
            Hey, I’m Sola Ojo <br /> and I love building beautiful websites
          </h1>
            <button className="about-arrow">
              <img src={ArrowsDown} className="arrowsDown" alt="ArrowsDown" />
              </button>
            <button className="about-btn">ABOUT ME</button>
        </div>
      </div>
    </>
  );
}

export default Banner;
