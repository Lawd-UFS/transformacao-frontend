import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';
import logo from '../../../assets/logo.png';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-content">
        <div className="footer-logo">
          <Link to="/" className="logo-container">
            <img src={logo} alt="Logo TransformAção" className="footer-logo-img" />
          </Link>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <MapPin size={20} color="var(--primary-color)" />
            <span className="contact-label"><strong>Cidade:</strong> Aracaju/SE</span>
          </div>

          <div className="contact-item">
            <Mail size={20} color="var(--primary-color)" />
            <span className="contact-label">
              <strong>Email:</strong>{' '}
              <a href="mailto:transformacaoaju@gmail.com">transformacaoaju@gmail.com</a>
            </span>
          </div>

          <div className="contact-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--primary-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="contact-label">
              <strong>Instagram:</strong>{' '}
              <a href="https://instagram.com/transformacao.se" target="_blank" rel="noopener noreferrer">
                @transformacao.se
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
