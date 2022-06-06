import { Link } from "react-router-dom";
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

function HomeFooter() {
  return (
    <>
      <nav className="footer-nav-container">
      <div className="footer-nav-items">
        <Link to="/" className="footer-logo">
          oxiraine
        </Link>
          <Link to="/" className="footer-home-nav">
            Home
          </Link>
          <Link to="/portfolio" className="footer-portfolio-nav">
            Portfolio
          </Link>
          <Link to="/contact-me" className="footer-contact-nav">
            Contact Me
          </Link>
          <a href="https://github.com/Oxiraine" className="footer-nav-link1">
            <FaGithub />
          </a>
          <a href="https://twitter.com/Iamrychard" className="footer-nav-link2">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/sola-ojo-a3a9311a3/" className="footer-nav-link3">
            <FaLinkedin />
          </a>
      </div>
    </nav>
    </>
  )
}

export default HomeFooter
