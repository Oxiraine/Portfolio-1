import { Link } from "react-router-dom";
import AboutImg from '../assets/image-homepage-profile.jpg'
function AboutMe() {
  return (
    <>
      <div className="about-container">
        <div className="about-img-container">
          <img src={AboutImg} alt="Me"  className='aboutImg'/>
        </div>
        <div className="about-text-area">
        <div className="top-line"></div>
          <h2>About Me</h2>
          <p>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
          <button className="portfolio-btn"><Link to='/portfolio' className='portfolio-link'>Go To Portfolio</Link></button>
          <div className="bottom-line"></div>
        </div>
      </div>
    </>
  )
}

export default AboutMe

