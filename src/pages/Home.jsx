import { Link } from "react-router-dom";
import Banner from "../components/Banner"
import AboutMe from "../components/AboutMe"
import HomeFooter from "../components/HomeFooter";
function Home() {
  return (
    <>
    <Banner /> 
    <AboutMe />

    <div className='action-info'>
      <h3>Interested in doing a project together?</h3>
      <div className="middle-line"></div>
      <button className="contact-btn"><Link to='/contact' className='contact-link'>Contact Me</Link></button>
    </div> 

    <HomeFooter />
    </>
  )
}

export default Home
