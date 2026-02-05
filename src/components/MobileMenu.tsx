import { useLanguage } from '../context/LanguageContext';
import './MobileMenu.css';

const MobileMenu = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: 'fr' | 'en') => {
    setLanguage(lang);
  };

  return (
    <details className="mobile-menu-container">
      <summary className="mobile-menu-toggle" aria-label="Toggle menu">
        <span className="hamburger"></span>
      </summary>
      <nav className="mobile-nav">
        <ul className="mobile-menu">
          <li><a href="/" className="mobile-link active">{t('nav.home')}</a></li>
          <li><a href="#services" className="mobile-link">{t('nav.services')}</a></li>
          <li><a href="#about" className="mobile-link">{t('nav.about')}</a></li>
          <li><a href="#projects" className="mobile-link">{t('nav.projects')}</a></li>
          <li><a href="#contact" className="mobile-link mobile-btn-contact">{t('nav.contact')}</a></li>
        </ul>
        <div className="mobile-lang-selector">
          <span 
            className={`mobile-lang-item ${language === 'fr' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('fr')}
          >
            FR
          </span>
          <span 
            className={`mobile-lang-item ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </span>
        </div>
      </nav>
      <div className="mobile-overlay"></div>
    </details>
  );
};

export default MobileMenu;
