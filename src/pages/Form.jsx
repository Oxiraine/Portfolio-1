import { Link } from 'react-router-dom'
import BookmarkImg from '../assets/image-bookmark-hero.jpg'
import SupportPreviewImg from '../assets/image-bookmark-preview-1.jpg'
import SupportPreviewImgTwo from '../assets/image-bookmark-preview-2.jpg'
import HomeFooter from '../components/HomeFooter'
import BookmarkScrollBar from '../components/BookmarkScrollBar'
function Form() {
  return (
    <>
      <div className='support-banner'>
        <img src={BookmarkImg} className='manage-hero-img' alt="manage" />
      </div>
        <article className="manage-details">
          <div className="manage-text-desc">
          <div className="preview-top-line"></div>
            <h1 className="manage-header">Bookmark</h1>
            
            <p className='manage-desc'>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
            <span className='key-points'>Interaction Design / Front End Development</span>
            <strong>HTML / CSS / JS</strong>
            <button className="preview-btn"><Link to='/portfolio/content/support' className='view-website'>View Website</Link></button>
            <div className="preview-bottom-line"></div>
          </div>
        
          <div className="project-desc">
            <h4>Project Background</h4>
            <p className='project-text-desc'>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
            <h5>Static Previews</h5>
            <img src={SupportPreviewImg} className='support-preview1' alt="support" />
            <img src={SupportPreviewImgTwo} className='support-preview2' alt="support" />
          </div>
        </article>

        <BookmarkScrollBar />

        <div className='support-action-info'>
      <h3>Interested in doing a project together?</h3>
      <div className="middle-line"></div>
      <button className="contact-btn"><Link to='/contact' className='contact-link'>Contact Me</Link></button>
    </div> 
    <div className='support-footer'>
    <HomeFooter />
    </div>
    </>
  )
}

export default Form
