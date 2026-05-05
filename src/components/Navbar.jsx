import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LangContext } from '../App';
import './Navbar.css';

const t = {
  EN: {
    home: 'Home', about: 'About', academics: 'Academics',
    admissions: 'Admissions', news: 'News & Events', contact: 'Contact',
    applyNow: 'Apply Now', school: 'Doha High School', tagline: 'Excellence Since 1980'
  },
  AR: {
    home: 'الرئيسية', about: 'عن المدرسة', academics: 'الأكاديميات',
    admissions: 'القبول', news: 'الأخبار', contact: 'تواصل معنا',
    applyNow: 'سجل الآن', school: 'مدرسة الدوحة الثانوية', tagline: 'تميز منذ عام 1980'
  }
};

export default function Navbar() {
  const { lang } = useContext(LangContext);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const txt = t[lang] || t.EN;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: txt.home },
    { path: '/about', label: txt.about },
    { path: '/academics', label: txt.academics },
    { path: '/news', label: txt.news },
    { path: '/contact', label: txt.contact },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand">
            <div className="brand-emblem">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <text x="20" y="16" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="Playfair Display,serif" fontWeight="700">DHS</text>
                <path d="M10 22 Q20 17 30 22" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M12 27 Q20 24 28 27" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-name">{txt.school}</span>
              <span className="brand-tagline">{txt.tagline}</span>
            </div>
          </Link>

          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <li key={link.path}>
                <Link to={link.path} className={`nav-link ${isActive(link.path) ? 'active' : ''}`}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav-cta">
              <Link to="/admissions" className="btn-nav-cta">
                <span>{txt.applyNow}</span>
              </Link>
            </li>
          </ul>

          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {menuOpen && <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
}