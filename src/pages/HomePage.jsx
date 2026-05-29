import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../App';
import { translations } from '../translations/Translations';
import { useReveal } from '../hooks/useReveal';
import './HomePage.css';

const stats = [
  { numEN: '35+', numAR: '+35', labelKey: 'yearsExcellence' },
  { numEN: '5000+', numAR: '+5000', labelKey: 'graduates' },
  { numEN: '100+', numAR: '+100', labelKey: 'faculty' },
  { numEN: '24+', numAR: '+24', labelKey: 'programs' },
];

const programIcons = ['⚗️','📚','🎨','💻','🌐','⚽'];

const galleryImages = [
  '/x3.jpeg',
  '/grade6.jpeg',
  '/seniors3.png',
  '/class2.jpg',
  '/x1.jpeg',
  '/x2.jpeg',
  '/playground.jpg',
  '/x44.png',
];

function CountUp({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const num = parseInt(target.replace(/\D/g, ''));
    const suffix = target.replace(/[\d]/g, '');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * num) + suffix);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count || '0'}</span>;
}

export default function HomePage() {
  const { lang } = useContext(LangContext);
  const txt = translations[lang] || translations.EN;
  const [heroLoaded, setHeroLoaded] = useState(false);
  const isRTL = lang === 'AR';
  useReveal();

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="home-page">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="hero4.jpeg"
            alt="School"
            className="hero-bg-img"
          />
          <div className="hero-overlay" />
          <div className="hero-overlay-pattern" />
        </div>
        <div className={`hero-content container ${heroLoaded ? 'hero-loaded' : ''}`}>
          <div className="hero-label">
            <span className="gold-line" />
            <span>{txt.since}</span>
            <span className="gold-line" />
          </div>
          <h1 className="hero-title">
            {txt.heroTitle.split('\n').map((line, i) => (
              <span key={i} className="hero-title-line" style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-sub">{txt.heroSub}</p>
          <div className="hero-actions">
            <Link to="/about" className="btn-primary">
              <span>{txt.exploreBtn}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/admissions" className="btn-outline">
              <span>{txt.admissionsBtn}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className="stat-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-number">
                  <CountUp target={lang === 'AR' ? s.numAR : s.numEN} />
                </div>
                <div className="stat-label">{txt[s.labelKey]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-images reveal-left">
              <div className="about-img-main">
                <img src="lesson.jpg" alt="Students" />
              </div>
              <div className="about-img-accent">
                <img src="class2.jpg" alt="School building" />
              </div>
              <div className="about-img-badge">
                <div className="badge-year">1989</div>
                <div className="badge-text">{txt.since}</div>
              </div>
            </div>
            <div className="about-text reveal-right">
              <span className="section-label">{txt.aboutLabel}</span>
              <h2 className="section-title">{txt.aboutTitle}</h2>
              <div className="section-divider" />
              <p>{txt.aboutText1}</p>
              <p style={{ marginTop: '20px' }}>{txt.aboutText2}</p>
              <Link to="/about" className="btn-primary" style={{ marginTop: '36px' }}>
                <span>{txt.learnMore}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="founder-section">
        <div className="founder-bg-img">
          <img src="nabil.jpeg" alt="Education" />
          <div className="founder-overlay" />
        </div>
        <div className="container">
          <div className="founder-inner">
            <div className="founder-portrait reveal-left">
              <div className="portrait-frame">
                <img src="nabil.jpeg" alt="Founder" />
              </div>
                {/* Find this block and replace it: */}
                <div className="portrait-emblem">
                  <img 
                    src="/logo-removebg-preview.png" 
                    alt="School Logo" 
                    className="portrait-emblem-logo" 
                  />
                </div>
            </div>
            <div className="founder-text reveal-right">
              <span className="section-label">{txt.founderLabel}</span>
              <h2 className="section-title white">{txt.founderTitle}</h2>
              <div className="section-divider" />
              <blockquote className="founder-quote">{txt.founderQuote}</blockquote>
              <h3 className="founder-name">{txt.founderName}</h3>
              <p className="founder-role">{txt.founderTitle2}</p>
              <p className="founder-bio">{txt.founderText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACADEMICS PREVIEW ── */}
      <section className="academics-preview">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{txt.academicsLabel}</span>
            <h2 className="section-title">{txt.academicsTitle}</h2>
            <div className="section-divider center" />
          </div>
          <div className="programs-grid">
            {(txt.programs_list || []).map((prog, i) => (
              <div className="program-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="program-icon">{programIcons[i]}</div>
                <h3 className="program-name">{prog}</h3>
                <div className="program-line" />
              </div>
            ))}
          </div>
          <div className="academics-cta reveal">
            <Link to="/academics" className="btn-primary">
              <span>{txt.exploreBtn}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section className="gallery-strip">
        <div className={`gallery-track${isRTL ? ' gallery-track-rtl' : ''}`}>
          {[...galleryImages, ...galleryImages].map((src, i) => (
            <div className="gallery-img-wrap" key={i}>
              <img src={src} alt={`School life ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ── ADMISSIONS CTA ── */}
      <section className="admissions-cta">
        <div className="admissions-cta-bg">
          <img src="grade6.jpeg" alt="Admissions" />
          <div className="admissions-cta-overlay" />
        </div>
        <div className="container">
          <div className="admissions-cta-inner reveal">
            <span className="section-label">{txt.admissionsLabel}</span>
            <h2 className="section-title white">{txt.admissionsTitle}</h2>
            <div className="section-divider center" />
            <p className="admissions-cta-text">{txt.admissionsText}</p>
            <p className="admissions-cta-open">{txt.registerOpen}</p>
            <div className="admissions-cta-btns">
              <Link to="/admissions" className="btn-gold">
                <span>{txt.fillForm}</span>
              </Link>
              <a
                href="https://wa.me/96171415411"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>{txt.whatsappDirect}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}