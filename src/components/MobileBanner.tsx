import { useLanguage } from '../context/LanguageContext';
import './MobileBanner.css';

const MobileBanner = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="mobile-banner">
      <div className="mobile-banner-container">
        {/* Phone Number Carousel */}
        <div className="phone-carousel">
          <div className="phone-carousel-inner">
            <a href="tel:+237242009397" className="phone-item">
              <span className="phone-icon">&#9742;</span>
              <span className="phone-text">+237 242 009 397</span>
            </a>
            <a href="tel:+237679177560" className="phone-item">
              <span className="phone-icon">&#9742;</span>
              <span className="phone-text">+237 679 177 560</span>
            </a>
            <a href="mailto:contact@bwgroup.com" className="phone-item">
              <span className="phone-icon">&#9993;</span>
              <span className="phone-text">contact@bwgroup.com</span>
            </a>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="mobile-lang-actions">
          <div className="mobile-language-toggle">
            <button
              className={`mobile-lang-btn ${language === 'fr' ? 'active' : ''}`}
              onClick={() => setLanguage('fr')}
            >
              FR
            </button>
            <button
              className={`mobile-lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBanner;
