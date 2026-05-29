import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../App';
import './Footer.css';

const t = {
  EN: {
    school: 'Doha High School',
    tagline: 'Shaping Leaders, Inspiring Excellence',
    desc: 'Committed to academic excellence and holistic development of every student since 1989. We nurture minds and build character.',
    quickLinks: 'Quick Links', contactUs: 'Contact Us', followUs: 'Follow Us',
    home: 'Home', about: 'About Us', academics: 'Academics', admissions: 'Admissions',
    contact: 'Contact',
    rights: 'All Rights Reserved', since: 'Excellence in Education Since 1989',
    address: 'Dohat El Hoss, Mount Lebanon, Lebanon',
    phone1: '+961 71 415 411', 
    email1: 'info@dohahighschool.com',
    officeHours: 'Office Hours', hours: 'Mon – Fri 8:00 AM – 3:00 PM',
  },
  AR: {
    school: 'مدرسة الدوحة الثانوية',
    tagline: 'نصنع القادة ونلهم التميز',
    desc: 'ملتزمون بالتميز الأكاديمي والتنمية الشاملة لكل طالب منذ عام 1989.',
    quickLinks: 'روابط سريعة', contactUs: 'اتصل بنا', followUs: 'تابعنا',
    home: 'الرئيسية', about: 'من نحن', academics: 'الأكاديميات', admissions: 'القبول',
    contact: 'تواصل معنا', 
    rights: 'جميع الحقوق محفوظة', since: 'تميز في التعليم منذ 1989',
    address: 'الدوحة الحص، جبل لبنان، لبنان',
    phone1: '411 415 71 961+',
    email1: 'info@dohahighschool.com',
    officeHours: 'ساعات العمل', hours: 'الاثنين - الجمعة: 8:00 ص - 3:00 م',
  }
};

export default function Footer() {
  const { lang } = useContext(LangContext);
  const txt = t[lang] || t.EN;
  const year = new Date().getFullYear();
  const isRTL = lang === 'AR';

  return (
    <footer className={`footer${isRTL ? ' rtl' : ''}`}>
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand-col">
              <div className="footer-logo">
                <div className="footer-logo-img-wrapper">
                  {/* DIRECT PUBLIC CALL OVERRIDE */}
<img 
  src="/logo-removebg-preview.png" 
  alt={`${txt.school} Logo`} 
  className="footer-img-logo" 
/>
                </div>
                <div>
                  <div className="footer-school-name">{txt.school}</div>
                  <div className="footer-school-since">{txt.since}</div>
                </div>
              </div>
              <p className="footer-desc">{txt.desc}</p>
              
              <div className="footer-social">
                <p className="footer-col-title">{txt.followUs}</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/share/18uUiBNndR/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/dohahighschool?igsh=d254ZHppOWZmZDVv" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://wa.me/96171415411" target="_blank" rel="noreferrer" className="social-icon whatsapp-social" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">{txt.quickLinks}</h4>
              <ul className="footer-links">
                <li><Link to="/">{txt.home}</Link></li>
                <li><Link to="/about">{txt.about}</Link></li>
                <li><Link to="/academics">{txt.academics}</Link></li>
                <li><Link to="/admissions">{txt.admissions}</Link></li>
                <li><Link to="/contact">{txt.contact}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">{txt.contactUs}</h4>
              <div className="footer-contact-items">
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">📍</span>
                  <span>{txt.address}</span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">📞</span>
                  <div>
                    <a href={`tel:${txt.phone1.replace(/\s/g,'')}`}>{txt.phone1}</a><br/>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">✉️</span>
                  <div>
                    <a href={`mailto:${txt.email1}`}>{txt.email1}</a><br/>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">🕐</span>
                  <div>
                    <strong>{txt.officeHours}</strong><br/>
                    <span>{txt.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {year} {txt.school}. {txt.rights}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}