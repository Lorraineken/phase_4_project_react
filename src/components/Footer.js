import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <p   ><Link className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/about">About</Link></p>
        <p>Palm fitness &copy; 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;