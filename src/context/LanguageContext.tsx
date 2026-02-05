import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.subtitle': 'Solutions d\'entreprise innovantes',
    'hero.description': 'Nous transformons vos idées en réalités tangibles. Découvrez comment notre expertise peut propulser votre entreprise vers de nouveaux sommets. Avec plus de 10 ans d\'expérience, nous accompagnons les entreprises dans leur transformation numérique et leur croissance durable. Notre équipe d\'experts passionnés est dédiée à votre succès.',
    'hero.feature.expertise': 'Expertise reconnue',
    'hero.feature.results': 'Résultats mesurables',
    'hero.feature.support': 'Accompagnement personnalisé',
    'hero.cta.discover': 'Découvrir nos services',
    'hero.cta.contact': 'Nous contacter',
    
    // Quick Actions
    'actions.payment': 'Paiement de service',
    'actions.payment.desc': 'Effectuez vos paiements en toute sécurité',
    'actions.payment.access': 'Accéder',
    'actions.quote': 'Demande de devis',
    'actions.quote.desc': 'Obtenez un devis personnalisé',
    'actions.ticket': 'Achat de ticket',
    'actions.ticket.desc': 'Réservez vos billets en ligne',
    
    // Why Choose BWGROUP
    'why.title': 'Pourquoi choisir BWGROUP ?',
    'why.subtitle': 'Une expertise éprouvée depuis 2013 au service de votre réussite',
    'why.card.security': 'Sécurité Totale',
    'why.card.security.desc': 'Nous mettons l\'accent sur une sécurité totale et un résultat de haute qualité pour tous vos projets.',
    'why.card.performance': 'Performance Garantie',
    'why.card.performance.desc': 'Nous garantissons que votre produit fonctionnera exactement comme il se doit, même sous charge.',
    'why.card.team': 'Équipe Dédiée',
    'why.card.team.desc': 'Une équipe dévouée et compétente qui vous soutient 24h/24 avec une équipe dédiée par projet.',
    'why.card.agility': 'Agilité et Évolution',
    'why.card.agility.desc': 'Notre approche combine les meilleurs aspects de Lean et Scrum pour favoriser l\'évolution et l\'agilité.',
    'why.card.support': 'Support Post-Développement',
    'why.card.support.desc': 'Nous fournissons un support post-développement complet et adaptons les processus à votre agenda.',
    'why.card.value': 'Valeur Ajoutée',
    'why.card.value.desc': 'Notre objectif ultime est d\'ajouter de la valeur à votre entreprise avec des investissements réduits.',
    'why.expertise.title': 'Une Expertise Technique et Industrielle',
    'why.expertise.desc1': 'Nous développons des applications web, mobile et desktop avec l\'équilibre d\'une expertise technique et industrielle approfondie. Une fois que vous démarrez une collaboration avec BWGROUP, vous obtenez un accès instantané à notre ensemble de compétences technologiques, à notre infrastructure informatique prête à l\'emploi et à nos processus de développement de logiciels matures acquis depuis 2013.',
    'why.expertise.desc2': 'Nos conceptions reposent sur une compréhension approfondie des activités de nos clients et de leurs clients. Nous incorporons des commentaires et des analyses pour créer des interfaces fonctionnelles, belles et accessibles.',
    
    // Services
    'services.title': 'Nos services',
    'services.subtitle': 'Des solutions adaptées à vos besoins pour inspirer votre croissance',
    'service.consulting': 'Conseil stratégique',
    'service.consulting.desc': 'Accompagnement personnalisé pour optimiser votre stratégie d\'entreprise et maximiser votre croissance.',
    'service.consulting.more': 'En savoir plus',
    'service.innovation': 'Innovation',
    'service.innovation.desc': 'Solutions créatives et technologiques pour garder une longueur d\'avance sur vos concurrents.',
    'service.innovation.more': 'En savoir plus',
    'service.performance': 'Performance',
    'service.performance.desc': 'Optimisation des processus pour améliorer l\'efficacité et la productivité de votre organisation.',
    'service.performance.more': 'En savoir plus',
    'service.analytics': 'Analyse de données',
    'service.analytics.desc': 'Transformez vos données en insights actionnables pour des décisions éclairées et stratégiques.',
    'service.analytics.more': 'En savoir plus',
    
    // About
    'about.title': 'À propos de BWGROUP',
    'about.desc1': 'Depuis notre création, BWGROUP s\'est imposé comme un acteur majeur dans le monde de l\'entreprise. Notre mission est de fournir des solutions innovantes et personnalisées à nos clients.',
    'about.desc2': 'Nous croyons en la puissance de l\'innovation et de la collaboration pour créer des résultats exceptionnels. Notre équipe d\'experts passionnés est dédiée à votre succès.',
    'about.stats.years': 'Années d\'expérience',
    'about.stats.clients': 'Clients satisfaits',
    'about.stats.success': 'Taux de réussite',
    
    // Appointment
    'appointment.title': 'Prenez rendez-vous',
    'appointment.desc': 'Planifiez une consultation avec nos experts. Nous vous répondrons sous 24h.',
    'appointment.benefit.flexibility': 'Flexibilité',
    'appointment.benefit.flexibility.desc': 'Choisissez la date et l\'heure qui vous conviennent',
    'appointment.benefit.response': 'Réponse rapide',
    'appointment.benefit.response.desc': 'Nos équipes vous contactent sous 24h',
    'appointment.benefit.expertise': 'Expertise',
    'appointment.benefit.expertise.desc': 'Consultation avec nos spécialistes',
    'appointment.form.name': 'Nom complet',
    'appointment.form.name.placeholder': 'Votre nom',
    'appointment.form.service': 'Service souhaité',
    'appointment.form.service.placeholder': 'Sélectionnez un service',
    'appointment.form.date': 'Date',
    'appointment.form.time': 'Heure',
    'appointment.form.time.placeholder': 'Heure',
    'appointment.form.message': 'Message (optionnel)',
    'appointment.form.message.placeholder': 'Décrivez votre demande...',
    'appointment.form.submit': 'Confirmer le rendez-vous',
    
    // Footer
    'footer.description': 'Votre partenaire de confiance pour des solutions innovantes et performantes. Nous accompagnons votre entreprise vers le succès.',
    'footer.quicklinks': 'Liens rapides',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copyright': ' BW Group Ltd Copyright © {year}. Tous droits réservés.',
    
    // Contact Info
    'contact.address': 'Biyemassi, Yaounde, Cameroun',
    'contact.phone': '+237 242 009 397',
    'contact.phone2': '+237 679 177 560',
    'contact.email': 'contact@bwgroup.com',
    
    // CTA Section
    'cta.title': 'Prêt à transformer votre entreprise ?',
    'cta.description': 'Contactez-nous dès aujourd\'hui pour discuter de vos projets.',
    'cta.button': 'Contactez-nous',
    
    // Mobile Footer
    'mobile.call.us': 'Appelez-nous',
    'mobile.send.email': 'Envoyez un email',
    'mobile.our.address': 'Notre adresse',
    'mobile.privacy': 'Confidentialité',
    'mobile.terms': 'Conditions',
    'mobile.all.rights': 'Tous droits réservés.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.subtitle': 'Innovative Business Solutions',
    'hero.description': 'We transform your ideas into tangible realities. Discover how our expertise can propel your company to new heights. With over 10 years of experience, we support businesses in their digital transformation and sustainable growth. Our team of passionate experts is dedicated to your success.',
    'hero.feature.expertise': 'Recognized Expertise',
    'hero.feature.results': 'Measurable Results',
    'hero.feature.support': 'Personalized Support',
    'hero.cta.discover': 'Discover Our Services',
    'hero.cta.contact': 'Contact Us',
    
    // Quick Actions
    'actions.payment': 'Service Payment',
    'actions.payment.desc': 'Make your payments securely',
    'actions.payment.access': 'Access',
    'actions.quote': 'Request a Quote',
    'actions.quote.desc': 'Get a personalized quote',
    'actions.ticket': 'Ticket Purchase',
    'actions.ticket.desc': 'Book your tickets online',
    
    // Why Choose BWGROUP
    'why.title': 'Why Choose BWGROUP?',
    'why.subtitle': 'Proven expertise since 2013 at the service of your success',
    'why.card.security': 'Total Security',
    'why.card.security.desc': 'We emphasize total security and high-quality results for all your projects.',
    'why.card.performance': 'Guaranteed Performance',
    'why.card.performance.desc': 'We guarantee that your product will work exactly as it should, even under load.',
    'why.card.team': 'Dedicated Team',
    'why.card.team.desc': 'A devoted and competent team that supports you 24/7 with a dedicated team per project.',
    'why.card.agility': 'Agility and Evolution',
    'why.card.agility.desc': 'Our approach combines the best aspects of Lean and Scrum to foster evolution and agility.',
    'why.card.support': 'Post-Development Support',
    'why.card.support.desc': 'We provide comprehensive post-development support and adapt processes to your schedule.',
    'why.card.value': 'Added Value',
    'why.card.value.desc': 'Our ultimate goal is to add value to your business with reduced investments.',
    'why.expertise.title': 'Technical and Industrial Expertise',
    'why.expertise.desc1': 'We develop web, mobile, and desktop applications with the balance of deep technical and industrial expertise. Once you start a collaboration with BWGROUP, you get instant access to our set of technological skills, our ready-to-use IT infrastructure, and our mature software development processes acquired since 2013.',
    'why.expertise.desc2': 'Our designs are based on a deep understanding of our clients\' activities and their customers. We incorporate comments and analyses to create functional, beautiful, and accessible interfaces.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Solutions tailored to your needs to inspire your growth',
    'service.consulting': 'Strategic Consulting',
    'service.consulting.desc': 'Personalized support to optimize your business strategy and maximize your growth.',
    'service.consulting.more': 'Learn More',
    'service.innovation': 'Innovation',
    'service.innovation.desc': 'Creative and technological solutions to stay ahead of your competitors.',
    'service.innovation.more': 'Learn More',
    'service.performance': 'Performance',
    'service.performance.desc': 'Process optimization to improve your organization\'s efficiency and productivity.',
    'service.performance.more': 'Learn More',
    'service.analytics': 'Data Analytics',
    'service.analytics.desc': 'Transform your data into actionable insights for informed and strategic decisions.',
    'service.analytics.more': 'Learn More',
    
    // About
    'about.title': 'About BWGROUP',
    'about.desc1': 'Since our creation, BWGROUP has established itself as a major player in the business world. Our mission is to provide innovative and personalized solutions to our clients.',
    'about.desc2': 'We believe in the power of innovation and collaboration to create exceptional results. Our team of passionate experts is dedicated to your success.',
    'about.stats.years': 'Years of Experience',
    'about.stats.clients': 'Satisfied Clients',
    'about.stats.success': 'Success Rate',
    
    // Appointment
    'appointment.title': 'Book an Appointment',
    'appointment.desc': 'Schedule a consultation with our experts. We will respond within 24 hours.',
    'appointment.benefit.flexibility': 'Flexibility',
    'appointment.benefit.flexibility.desc': 'Choose the date and time that suits you',
    'appointment.benefit.response': 'Quick Response',
    'appointment.benefit.response.desc': 'Our teams will contact you within 24 hours',
    'appointment.benefit.expertise': 'Expertise',
    'appointment.benefit.expertise.desc': 'Consultation with our specialists',
    'appointment.form.name': 'Full Name',
    'appointment.form.name.placeholder': 'Your name',
    'appointment.form.service': 'Desired Service',
    'appointment.form.service.placeholder': 'Select a service',
    'appointment.form.date': 'Date',
    'appointment.form.time': 'Time',
    'appointment.form.time.placeholder': 'Time',
    'appointment.form.message': 'Message (optional)',
    'appointment.form.message.placeholder': 'Describe your request...',
    'appointment.form.submit': 'Confirm Appointment',
    
    // Footer
    'footer.description': 'Your trusted partner for innovative and high-performing solutions. We support your company towards success.',
    'footer.quicklinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copyright': ' BW Group Ltd Copyright © {year}. All rights reserved.',
    
    // Contact Info
    'contact.address': 'Biyemassi, Yaounde, Cameroon',
    'contact.phone': '+237 242 009 397',
    'contact.phone2': '+237 679 177 560',
    'contact.email': 'contact@bwgroup.com',
    
    // CTA Section
    'cta.title': 'Ready to transform your business?',
    'cta.description': 'Contact us today to discuss your projects.',
    'cta.button': 'Contact Us',
    
    // Mobile Footer
    'mobile.call.us': 'Call us',
    'mobile.send.email': 'Send an email',
    'mobile.our.address': 'Our address',
    'mobile.privacy': 'Privacy',
    'mobile.terms': 'Terms',
    'mobile.all.rights': 'All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return (saved === 'fr' || saved === 'en') ? saved : 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
