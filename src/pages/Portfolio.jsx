import { Link } from 'react-router-dom'
import SupportImg from '../assets/image-portfolio-manage.jpg'
import CoffeeImg from '../assets/image-portfolio-insure.jpg'
import SignUpImg from '../assets/image-portfolio-bookmark.jpg'
import MakerImg from '../assets/image-portfolio-fylo.jpg'
import HomeFooter from '../components/HomeFooter'

function Portfolio() {
  return (
    <>
    <div className="support-container">
      <img src={SupportImg} className='support-desk-img' alt='support' />
      <div className="support-text">
      <div className="index-top-line"></div>
        <h1 className='support-header'>Support Desk</h1>
        <p className='support-desc'>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
        <button className="support-btn"><Link to='/portfolio/content/support' className='view-support'>View Project</Link></button>
        <div className="index-bottom-line"></div>
      </div>
    </div>
    <div className="form-container">
      <div className="form-text">
      <div className="index-top-line"></div>
        <h1 className='form-header'>Sign Up Form</h1>
        <p className='form-desc'>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.</p>
        <button className="form-btn"><Link to='/portfolio/content/form' className='view-form'>View Project</Link></button>
        <div className="index-bottom-line"></div>
      </div>
      <img src={SignUpImg} className='form-img' alt='Sign-Up-Form' />
    </div>

    <div className="coffee-container">
      <img src={CoffeeImg} className='coffee-img' alt='Coffee' />
      <div className="coffee-text">
      <div className="index-top-line"></div>
        <h1 className='coffee-header'>Coffee Roaster</h1>
        <p className='coffee-desc'>This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.</p>
        <button className="coffee-btn"><Link to='/portfolio/content/coffee' className='view-coffee'>View Project</Link></button>
        <div className="index-bottom-line"></div>
      </div>
    </div>

    <div className="maker-container">
      <div className="maker-text">
      <div className="index-top-line"></div>
        <h1 className='maker-header'>Maker</h1>
        <p className='maker-desc'>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.</p>
        <button className="maker-btn"><Link to='/portfolio/content/maker' className='view-maker'>View Project</Link></button>
        <div className="index-bottom-line"></div>
      </div>
      <img src={MakerImg} className='maker-img' alt='Fylo' />
    </div>

    <div className='action-info'>
      <h3>Interested in doing a project together?</h3>
      <div className="middle-line"></div>
      <button className="contact-btn"><Link to='/contact' className='contact-link'>Contact Me</Link></button>
    </div> 

    <HomeFooter />
    </>
  )
}

export default Portfolio
