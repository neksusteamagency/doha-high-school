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
{/* Find this block in LanguagePopup.jsx and replace it: */}
<div className="lang-logo">
  <div className="lang-logo-emblem">
    <img 
      src="/logo-removebg-preview.png" 
      alt="Doha High School Crest" 
      className="lang-img-logo" 
    />
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
