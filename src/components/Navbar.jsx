import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <nav className="navbar-container">
      <div className="nav-items">
        <Link to="/" className="logo">
          oxiraine
        </Link>
        <button onClick={handleToggle}>
        {navbarOpen ? (
              <FaTimes  className="fa fa-times"/>
        ) : (
              <FaBars  className="fa fa-bars"/>
        ) } 
        </button>

        <div className={`nav-items-links ${navbarOpen ? " showMenu" : ""}`}>
          <Link
            to="/"
            fill={pathMatchRoute("/") ? "#5FB4A2" : "#33323D"}
            className={pathMatchRoute("/") ? "home-nav-active" : "home-nav"} 
            onClick={() => closeMenu()}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            fill={pathMatchRoute("/portfolio") ? "#5FB4A2" : "#5FB4A2"}
            className={
              pathMatchRoute("/portfolio")
                ? "portfolio-nav-active"
                : "portfolio-nav"
            }
            onClick={() => closeMenu()}

          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            fill={pathMatchRoute("/contact") ? "#5FB4A2" : "#33323D"}
            className={
              pathMatchRoute("/contact") ? "contact-nav-active" : "contact-nav"
            }
            onClick={() => closeMenu()
            }
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
