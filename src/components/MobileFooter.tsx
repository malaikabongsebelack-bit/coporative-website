import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './MobileFooter.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const MobileFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="mobile-footer">
      {/* Brand */}
      <motion.div 
        className="mobile-footer-brand"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
      >
        <h2 className="mobile-footer-logo">BW<span>GROUP</span></h2>
        <p className="mobile-footer-desc">
          {t('footer.description')}
        </p>
        <motion.div 
          className="mobile-footer-social"
          variants={staggerContainer}
        >
          <motion.a href="#" aria-label="LinkedIn" whileHover={{ scale: 1.2 }}><Linkedin size={20} /></motion.a>
          <motion.a href="#" aria-label="Twitter" whileHover={{ scale: 1.2 }}><Twitter size={20} /></motion.a>
          <motion.a href="#" aria-label="Facebook" whileHover={{ scale: 1.2 }}><Facebook size={20} /></motion.a>
        </motion.div>
      </motion.div>

      {/* Contact Cards */}
      <motion.div 
        className="mobile-footer-contacts"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={staggerContainer}
      >
        <motion.a href="tel:+237242009397" className="mobile-contact-card" variants={fadeInUp}>
          <div className="mobile-contact-icon"><Phone size={20} /></div>
          <div className="mobile-contact-info">
            <span className="mobile-contact-label">{t('mobile.call.us')}</span>
            <span className="mobile-contact-value">+237 242 009 397</span>
          </div>
        </motion.a>
        <motion.a href="tel:+237679177560" className="mobile-contact-card" variants={fadeInUp}>
          <div className="mobile-contact-icon"><Phone size={20} /></div>
          <div className="mobile-contact-info">
            <span className="mobile-contact-label">{t('mobile.call.us')}</span>
            <span className="mobile-contact-value">+237 679 177 560</span>
          </div>
        </motion.a>
        <motion.a href="mailto:contact@bwgroup.com" className="mobile-contact-card" variants={fadeInUp}>
          <div className="mobile-contact-icon"><Mail size={20} /></div>
          <div className="mobile-contact-info">
            <span className="mobile-contact-label">{t('mobile.send.email')}</span>
            <span className="mobile-contact-value">contact@bwgroup.com</span>
          </div>
        </motion.a>
        <motion.div className="mobile-contact-card" variants={fadeInUp}>
          <div className="mobile-contact-icon"><MapPin size={20} /></div>
          <div className="mobile-contact-info">
            <span className="mobile-contact-label">{t('mobile.our.address')}</span>
            <span className="mobile-contact-value">{t('contact.address')}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Quick Links */}
      <motion.div 
        className="mobile-footer-links"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
      >
        <h3>{t('footer.quicklinks')}</h3>
        <div className="mobile-links-grid">
          <motion.a href="/" className="mobile-link-item" whileHover={{ x: 5 }}>{t('nav.home')}</motion.a>
          <motion.a href="#services" className="mobile-link-item" whileHover={{ x: 5 }}>{t('nav.services')}</motion.a>
          <motion.a href="#about" className="mobile-link-item" whileHover={{ x: 5 }}>{t('nav.about')}</motion.a>
          <motion.a href="#contact" className="mobile-link-item" whileHover={{ x: 5 }}>{t('nav.contact')}</motion.a>
        </div>
      </motion.div>

      {/* Services */}
      <motion.div 
        className="mobile-footer-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
      >
        <h3>{t('services.title')}</h3>
        <div className="mobile-links-grid">
          <motion.a href="#services" className="mobile-link-item" whileHover={{ x: 5 }}>{t('service.consulting')}</motion.a>
          <motion.a href="#services" className="mobile-link-item" whileHover={{ x: 5 }}>{t('service.innovation')}</motion.a>
          <motion.a href="#services" className="mobile-link-item" whileHover={{ x: 5 }}>{t('service.performance')}</motion.a>
          <motion.a href="#services" className="mobile-link-item" whileHover={{ x: 5 }}>{t('service.analytics')}</motion.a>
        </div>
      </motion.div>

      {/* Bottom */}
      <motion.div 
        className="mobile-footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <p>© {new Date().getFullYear()} BW Group Ltd. {t('mobile.all.rights')}</p>
        <div className="mobile-footer-legal">
          <motion.a href="#" whileHover={{ scale: 1.1 }}>{t('mobile.privacy')}</motion.a>
          <motion.a href="#" whileHover={{ scale: 1.1 }}>{t('mobile.terms')}</motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default MobileFooter;
