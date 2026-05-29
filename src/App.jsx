import React, { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguagePopup from './components/LanguagePopup';

import './App.css';

export const LangContext = createContext();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function PageTransition({ children }) {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, [pathname]);
  return (
    <div className={`page-transition ${show ? 'page-visible' : 'page-hidden'}`}>
      {children}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState(null);
  const [langChosen, setLangChosen] = useState(false);

  const chooseLanguage = (l) => {
    setLang(l);
    setLangChosen(true);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Router>
        <ScrollToTop />
        {!langChosen && <LanguagePopup onChoose={chooseLanguage} />}
        {langChosen && (
          <div className={`app-wrapper ${lang === 'AR' ? 'rtl' : 'ltr'}`}>
            <Navbar />
            <PageTransition>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/academics" element={<AcademicsPage />} />
                <Route path="/admissions" element={<AdmissionsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </PageTransition>
            <Footer />
          </div>
        )}
      </Router>
    </LangContext.Provider>
  );
}