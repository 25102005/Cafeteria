import React from 'react';
import { FaFacebook, FaGithub  } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import './Footer.styles.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2024 BRAND NAME. De Emanuel Antonio Guzman Martinez.</p>
        <div className="footer__icons">
          <a href="https://www.facebook.com/emanuel.guzmanmartinez.98" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footer__icon" />
          </a>
          <a href="https://github.com/25102005" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer__icon" />
          </a>
          <a href="https://www.instagram.com/e.a.guzman_martinez/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram  className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
