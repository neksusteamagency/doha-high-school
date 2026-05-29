import React, { useState } from 'react';
import './LanguagePopup.css';

const translations = {
  EN: {
    welcome: 'Welcome to',
    school: 'Doha High School',
    choose: 'Please choose your preferred language',
    en: 'English',
    ar: 'العربية',
    enSub: 'Continue in English',
    arSub: 'المتابعة بالعربية',
    since: 'Excellence in Education Since 1989',
  },
  AR: {}
};

export default function LanguagePopup({ onChoose }) {
  const [animating, setAnimating] = useState(false);
  const [chosen, setChosen] = useState(null);

  const handleChoose = (lang) => {
    setChosen(lang);
    setAnimating(true);
    setTimeout(() => onChoose(lang), 700);
  };

  return (
    <div className={`lang-overlay ${animating ? 'fade-out' : ''}`}>
      <div className="lang-bg">
        {/* School building photo using Unsplash */}
        <img
          src="class2.jpg"
          alt="Doha High School"
          className="lang-bg-img"
        />
        <div className="lang-bg-overlay" />
      </div>
      <div className={`lang-card ${animating ? 'card-shrink' : ''}`}>
        <div className="lang-logo">
          <div className="lang-logo-emblem">
            <svg viewBox="0 0 60 60" width="60" height="60">
              <circle cx="30" cy="30" r="28" fill="none" stroke="#c9a84c" strokeWidth="2"/>
              <circle cx="30" cy="30" r="22" fill="none" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="2 4"/>
              <text x="30" y="24" textAnchor="middle" fill="#c9a84c" fontSize="10" fontFamily="Playfair Display,serif" fontWeight="700">DHS</text>
              <path d="M18 32 Q30 26 42 32" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
              <path d="M20 38 Q30 34 40 38" stroke="#c9a84c" strokeWidth="1" fill="none"/>
            </svg>
          </div>
        </div>
        <p className="lang-welcome">{translations.EN.welcome}</p>
        <h1 className="lang-school-name">{translations.EN.school}</h1>
        <div className="lang-divider" />
        <p className="lang-since">{translations.EN.since}</p>
        <p className="lang-choose">{translations.EN.choose}</p>
        <div className="lang-buttons">
          <button
            className={`lang-btn ${chosen === 'EN' ? 'chosen' : ''}`}
            onClick={() => handleChoose('EN')}
          >
            <span className="lang-btn-flag">🇬🇧</span>
            <span className="lang-btn-name">{translations.EN.en}</span>
            <span className="lang-btn-sub">{translations.EN.enSub}</span>
          </button>
          <button
            className={`lang-btn ${chosen === 'AR' ? 'chosen' : ''}`}
            onClick={() => handleChoose('AR')}
          >
            <span className="lang-btn-flag">🇱🇧</span>
            <span className="lang-btn-name">{translations.EN.ar}</span>
            <span className="lang-btn-sub">{translations.EN.arSub}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
