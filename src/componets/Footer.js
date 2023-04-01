import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
      <footer>
        <div className="container">
          <nav className="footer-nav">
            <ul>
              <li>
                Home
                {/* <Link to="/">Home</Link> */}
              </li>
              <li>
                About-us
                {/* <Link to="/about">About</Link> */}
              </li>
              <li>
                our club
                {/* <Link to="/services">Our club</Link> */}
              </li>
              <li>
                our legacy
                {/* <Link to="/contact">Our legacy</Link> */}
              </li>
            </ul>
            <div className="social-icons">
              <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  