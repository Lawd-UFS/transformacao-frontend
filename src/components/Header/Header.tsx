import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAccessibility } from '../../context/AccessibilityContext';
import logo from '../../assets/logo.png';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { increaseFontSize, decreaseFontSize, resetFontSize } = useAccessibility();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (menuName: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (activeDropdown === menuName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menuName);
    }
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="accessibility-bar">
        <div className="container accessibility-content">
          {/* <Link to="/admin" className="admin-panel-link">Painel administrativo</Link> */}
          <div className="accessibility-controls">
            <button onClick={increaseFontSize} className="access-btn" title="Aumentar Fonte">A+</button>
            <button onClick={decreaseFontSize} className="access-btn" title="Diminuir Fonte">A-</button>
            <button onClick={resetFontSize} className="access-btn" title="Tamanho Padrão">A</button>
            {/* <button onClick={toggleHighContrast} className="contrast-toggle-btn" title="Alto Contraste">
              <span className="contrast-icon"></span>
            </button> */}
          </div>
        </div>
      </div>

      <div className="main-nav-bar">
        <div className="container nav-content">
          <Link to="/" className="site-logo" onClick={handleLinkClick}>
            <img src={logo} alt="Logo TransformAção" className="logo-img" />
          </Link>

          <button 
            className={`menu-toggle-btn ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`navigation-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              <li className={`nav-item dropdown ${activeDropdown === 'sobre-nos' ? 'open' : ''}`}>
                <a 
                  href="#" 
                  onClick={(e) => handleDropdownToggle('sobre-nos', e)}
                  className="nav-link dropdown-toggle"
                >
                  Sobre nós <span className="arrow-down"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/quem-somos" onClick={handleLinkClick}>Quem somos</Link>
                  </li>
                  <li>
                    <Link to="/transparencia" onClick={handleLinkClick}>Transparência</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/obras" className="nav-link" onClick={handleLinkClick}>Obras</Link>
              </li>

              <li className={`nav-item dropdown ${activeDropdown === 'faca-parte' ? 'open' : ''}`}>
                <a 
                  href="#" 
                  onClick={(e) => handleDropdownToggle('faca-parte', e)}
                  className="nav-link dropdown-toggle"
                >
                  Faça parte <span className="arrow-down"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/doacao" onClick={handleLinkClick}>Fazer doação</Link>
                  </li>
                  <li>
                    <Link to="/voluntariado" onClick={handleLinkClick}>Ser voluntário</Link>
                  </li>
                  <li>
                    <Link to="/parceiras" onClick={handleLinkClick}>Ser empresa parceira</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/midia" className="nav-link" onClick={handleLinkClick}>Mídia</Link>
              </li>

              <li className="nav-item">
                <Link to="/contato" className="nav-link" onClick={handleLinkClick}>Fale conosco</Link>
              </li>
            </ul>

            <div className="mobile-cta-wrapper">
              <button onClick={() => { handleLinkClick(); navigate('/doacao'); }} className="doe-agora-btn">
                Doe agora
              </button>
            </div>
          </nav>

          <div className="desktop-cta-wrapper">
            <button onClick={() => navigate('/doacao')} className="doe-agora-btn">
              Doe agora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
