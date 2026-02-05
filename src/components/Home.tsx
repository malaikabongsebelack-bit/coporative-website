import { 
  Briefcase, 
  Lightbulb, 
  Zap, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  CreditCard,
  FileText,
  Ticket,
  Calendar,
  Clock,
  User,
  MessageSquare,
  Shield,
  Target,
  Users as UsersIcon,
  Zap as ZapIcon,
  RefreshCw,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
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

const Home = () => {
  const { t } = useLanguage();

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            BW<span>GROUP</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('hero.description')}
          </motion.p>
          <motion.div 
            className="hero-features"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="feature">
              <span className="feature-icon"><Award size={18} /></span>
              <span>{t('hero.feature.expertise')}</span>
            </div>
            <div className="feature">
              <span className="feature-icon"><TrendingUp size={18} /></span>
              <span>{t('hero.feature.results')}</span>
            </div>
            <div className="feature">
              <span className="feature-icon"><Users size={18} /></span>
              <span>{t('hero.feature.support')}</span>
            </div>
          </motion.div>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="#services" className="btn btn-primary">
              {t('hero.cta.discover')} <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">{t('hero.cta.contact')}</a>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src="./assets/banner_image.png" 
            alt="BWGROUP Professional" 
          />
        </motion.div>
      </section>

      {/* Quick Actions Section */}
      <section className="quick-actions">
        <div className="section-container">
          <motion.div 
            className="actions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.a href="/paiement" className="action-card action-card-1" whileHover={{ scale: 1.05 }} variants={fadeInUp}>
              <div className="action-overlay">
                <div className="action-icon">
                  <CreditCard size={40} />
                </div>
                <h3>{t('actions.payment')}</h3>
                <p>{t('actions.payment.desc')}</p>
                <span className="action-link">
                  {t('actions.payment.access')} <ArrowRight size={16} />
                </span>
              </div>
            </motion.a>
            <motion.a href="/devis" className="action-card action-card-2" whileHover={{ scale: 1.05 }} variants={fadeInUp}>
              <div className="action-overlay">
                <div className="action-icon">
                  <FileText size={40} />
                </div>
                <h3>{t('actions.quote')}</h3>
                <p>{t('actions.quote.desc')}</p>
                <span className="action-link">
                  {t('actions.payment.access')} <ArrowRight size={16} />
                </span>
              </div>
            </motion.a>
            <motion.a href="/tickets" className="action-card action-card-3" whileHover={{ scale: 1.05 }} variants={fadeInUp}>
              <div className="action-overlay">
                <div className="action-icon">
                  <Ticket size={40} />
                </div>
                <h3>{t('actions.ticket')}</h3>
                <p>{t('actions.ticket.desc')}</p>
                <span className="action-link">
                  {t('actions.payment.access')} <ArrowRight size={16} />
                </span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose BWGROUP Section */}
      <section id="why-us" className="why-us">
        <div className="section-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {t('why.title')}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('why.subtitle')}
          </motion.p>
          
          <motion.div 
            className="why-us-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <Shield size={28} />
              </div>
              <h3>{t('why.card.security')}</h3>
              <p>{t('why.card.security.desc')}</p>
            </motion.div>
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <Target size={28} />
              </div>
              <h3>{t('why.card.performance')}</h3>
              <p>{t('why.card.performance.desc')}</p>
            </motion.div>
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <UsersIcon size={28} />
              </div>
              <h3>{t('why.card.team')}</h3>
              <p>{t('why.card.team.desc')}</p>
            </motion.div>
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <ZapIcon size={28} />
              </div>
              <h3>{t('why.card.agility')}</h3>
              <p>{t('why.card.agility.desc')}</p>
            </motion.div>
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <RefreshCw size={28} />
              </div>
              <h3>{t('why.card.support')}</h3>
              <p>{t('why.card.support.desc')}</p>
            </motion.div>
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <Heart size={28} />
              </div>
              <h3>{t('why.card.value')}</h3>
              <p>{t('why.card.value.desc')}</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="why-us-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="why-us-text" variants={fadeInUp}>
              <h3>{t('why.expertise.title')}</h3>
              <p>
                {t('why.expertise.desc1')}
              </p>
              <p>
                {t('why.expertise.desc2')}
              </p>
            </motion.div>
            <motion.div className="why-us-image" variants={fadeInUp}>
              <div className="why-us-img-container">
                <img 
                  src="https://i.pinimg.com/1200x/66/a8/33/66a833ec9c6a3f76c67e111b2b455db5.jpg" 
                  alt="BWGROUP Team" 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('services.subtitle')}
          </motion.p>
          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className="service-card" whileHover={{ y: -10, scale: 1.02 }} variants={fadeInUp}>
              <div className="service-icon">
                <Briefcase size={32} />
              </div>
              <h3>{t('service.consulting')}</h3>
              <p>{t('service.consulting.desc')}</p>
              <a href="#" className="service-link">
                {t('service.consulting.more')} <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div className="service-card" whileHover={{ y: -10, scale: 1.02 }} variants={fadeInUp}>
              <div className="service-icon">
                <Lightbulb size={32} />
              </div>
              <h3>{t('service.innovation')}</h3>
              <p>{t('service.innovation.desc')}</p>
              <a href="#" className="service-link">
                {t('service.innovation.more')} <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div className="service-card" whileHover={{ y: -10, scale: 1.02 }} variants={fadeInUp}>
              <div className="service-icon">
                <Zap size={32} />
              </div>
              <h3>{t('service.performance')}</h3>
              <p>{t('service.performance.desc')}</p>
              <a href="#" className="service-link">
                {t('service.performance.more')} <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div className="service-card" whileHover={{ y: -10, scale: 1.02 }} variants={fadeInUp}>
              <div className="service-icon">
                <BarChart3 size={32} />
              </div>
              <h3>{t('service.analytics')}</h3>
              <p>{t('service.analytics.desc')}</p>
              <a href="#" className="service-link">
                {t('service.analytics.more')} <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <motion.div 
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="about-text" variants={fadeInUp}>
              <h2 className="section-title">{t('about.title')}</h2>
              <p>
                {t('about.desc1')}
              </p>
              <p>
                {t('about.desc2')}
              </p>
              <motion.div 
                className="about-stats"
                variants={staggerContainer}
              >
                <motion.div className="stat" whileInView={{ scale: 1.1 }} viewport={{ once: false }} variants={fadeInUp}>
                  <span className="stat-number">10+</span>
                  <span className="stat-label">{t('about.stats.years')}</span>
                </motion.div>
                <motion.div className="stat" whileInView={{ scale: 1.1 }} viewport={{ once: false }} variants={fadeInUp}>
                  <span className="stat-number">500+</span>
                  <span className="stat-label">{t('about.stats.clients')}</span>
                </motion.div>
                <motion.div className="stat" whileInView={{ scale: 1.1 }} viewport={{ once: false }} variants={fadeInUp}>
                  <span className="stat-number">98%</span>
                  <span className="stat-label">{t('about.stats.success')}</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="about-image" variants={fadeInUp}>
              <div className="about-shape">
                <img 
                  src="./assets/avatar.png" 
                  alt="About BWGROUP" 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="appointment">
        <div className="section-container">
          <motion.div 
            className="appointment-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="appointment-info" variants={fadeInUp}>
              <h2 className="section-title">{t('appointment.title')}</h2>
              <p className="appointment-description">
                {t('appointment.desc')}
              </p>
              <motion.div 
                className="appointment-benefits"
                variants={staggerContainer}
              >
                <motion.div className="benefit" whileHover={{ x: 5 }} variants={fadeInUp}>
                  <div className="benefit-icon"><Calendar size={24} /></div>
                  <div>
                    <h4>{t('appointment.benefit.flexibility')}</h4>
                    <p>{t('appointment.benefit.flexibility.desc')}</p>
                  </div>
                </motion.div>
                <motion.div className="benefit" whileHover={{ x: 5 }} variants={fadeInUp}>
                  <div className="benefit-icon"><Clock size={24} /></div>
                  <div>
                    <h4>{t('appointment.benefit.response')}</h4>
                    <p>{t('appointment.benefit.response.desc')}</p>
                  </div>
                </motion.div>
                <motion.div className="benefit" whileHover={{ x: 5 }} variants={fadeInUp}>
                  <div className="benefit-icon"><User size={24} /></div>
                  <div>
                    <h4>{t('appointment.benefit.expertise')}</h4>
                    <p>{t('appointment.benefit.expertise.desc')}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="appointment-form-container" variants={fadeInUp}>
              <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label><User size={16} /> {t('appointment.form.name')}</label>
                  <input type="text" placeholder={t('appointment.form.name.placeholder')} required />
                </div>
                <div className="form-group">
                  <label><MessageSquare size={16} /> {t('appointment.form.service')}</label>
                  <select required>
                    <option value="">{t('appointment.form.service.placeholder')}</option>
                    <option value="conseil">{t('service.consulting')}</option>
                    <option value="innovation">{t('service.innovation')}</option>
                    <option value="performance">{t('service.performance')}</option>
                    <option value="analyse">{t('service.analytics')}</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label><Calendar size={16} /> {t('appointment.form.date')}</label>
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <label><Clock size={16} /> {t('appointment.form.time')}</label>
                    <select required>
                      <option value="">{t('appointment.form.time.placeholder')}</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>{t('appointment.form.message')}</label>
                  <textarea placeholder={t('appointment.form.message.placeholder')} rows={3}></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="btn btn-primary btn-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('appointment.form.submit')} <ArrowRight size={18} />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <div className="section-container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.description')}</p>
            <motion.a 
              href="mailto:contact@bwgroup.com" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('cta.button')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
