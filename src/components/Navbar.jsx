import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LangContext } from '../App';
import './Navbar.css';

const t = {
  EN: {
    home: 'Home', about: 'About', academics: 'Academics',
    admissions: 'Admissions', contact: 'Contact',
    applyNow: 'Apply Now', school: 'Doha High School', tagline: 'Excellence Since 1989'
  },
  AR: {
    home: 'الرئيسية', about: 'عن المدرسة', academics: 'الأكاديميات',
    admissions: 'القبول', news: 'الأخبار', contact: 'تواصل معنا',
    applyNow: 'سجل الآن', school: 'مدرسة الدوحة الثانوية', tagline: 'تميز منذ عام 1989'
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
    { path: '/contact', label: txt.contact },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand">
{/* Find this block in Navbar.jsx and replace it: */}
<div className="brand-emblem">
  <img 
    src="/logo-removebg-preview.png" 
    alt={`${txt.school} Logo`} 
    className="navbar-img-logo" 
  />
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