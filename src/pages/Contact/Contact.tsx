import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import bannerImg from '../../assets/contato/banner-contato.jpg';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="contact-hero-overlay" />
        <div className="container contact-hero-body">
          <h1 className="contact-hero-title">
            <span className="contact-hero-word">Entre em</span>
            <span className="contact-hero-sub">contato</span>
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-content-section">
        <div className="container contact-container">
          <div className="contact-card">
            <div className="contact-card-header">
              <h2 className="contact-card-title">Fale com o Projeto TransformAção</h2>
              <p className="contact-description">
                Tem alguma dúvida, deseja propor uma parceria ou quer entender como somar forças às nossas ações? Estamos sempre de braços abertos para ouvir você e construir novos caminhos de dignidade para as famílias atendidas.
              </p>
            </div>

            <div className="contact-action-wrapper">
              <a
                href="https://forms.gle/VhnA9Sts1nEtS4KD8"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-cta-btn"
                aria-label="Abrir formulário de contato em nova aba"
              >
                <span>Preencher formulário de contato</span>
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="contact-channels-divider">
              <span>ou fale conosco diretamente</span>
            </div>

            <div className="contact-channels-grid">
              <a
                href="mailto:transformacaoaju@gmail.com"
                className="contact-channel-card"
                aria-label="Enviar e-mail para transformacaoaju@gmail.com"
              >
                <div className="contact-channel-icon-wrapper">
                  <Mail size={22} aria-hidden="true" />
                </div>
                <div className="contact-channel-info">
                  <span className="contact-channel-label">E-mail</span>
                  <strong className="contact-channel-value">transformacaoaju@gmail.com</strong>
                </div>
              </a>

              <a
                href="https://www.instagram.com/transformacao.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                aria-label="Acessar o perfil no Instagram @transformacao.se"
              >
                <div className="contact-channel-icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="contact-channel-info">
                  <span className="contact-channel-label">Instagram</span>
                  <strong className="contact-channel-value">@transformacao.se</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
