import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          <h3 className="footer-logo">BW<span>GROUP</span></h3>
          <p className="footer-description">
            {t('footer.description')}
          </p>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          <h4>{t('footer.quicklinks')}</h4>
          <ul className="footer-links">
            <motion.li variants={fadeInUp}><a href="/">{t('nav.home')}</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#services">{t('nav.services')}</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#about">{t('nav.about')}</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#contact">{t('nav.contact')}</a></motion.li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          <h4>{t('footer.services')}</h4>
          <ul className="footer-links">
            <motion.li variants={fadeInUp}><a href="#services">{t('service.consulting')}</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#services">{t('service.innovation')}</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#services">{t('service.performance')}</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#services">{t('service.analytics')}</a></motion.li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          <h4>{t('footer.contact')}</h4>
          <ul className="footer-contact">
            <motion.li variants={fadeInUp}>
              <span className="contact-icon"><MapPin size={18} /></span>
              {t('contact.address')}
            </motion.li>
            <motion.li variants={fadeInUp}>
              <span className="contact-icon"><Phone size={18} /></span>
              {t('contact.phone')}
            </motion.li>
            <motion.li variants={fadeInUp}>
              <span className="contact-icon"><Phone size={18} /></span>
              {t('contact.phone2')}
            </motion.li>
            <motion.li variants={fadeInUp}>
              <span className="contact-icon"><Mail size={18} /></span>
              {t('contact.email')}
            </motion.li>
          </ul>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p> BW Group Ltd Copyright &copy; {new Date().getFullYear()}. {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}</p>
        <div className="footer-social">
          <motion.a 
            href="#" 
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a 
            href="#" 
            aria-label="Twitter"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Twitter size={18} />
          </motion.a>
          <motion.a 
            href="#" 
            aria-label="Facebook"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Facebook size={18} />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
