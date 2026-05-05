import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../App';
import { translations } from '../translations/Translations';
import { useReveal } from '../hooks/useReveal';
import './NewsPage.css';

const allNews = [
  { titleKey: 'news1Title', dateKey: 'news1Date', excerptKey: 'news1Excerpt', category: 'achievement', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80' },
  { titleKey: 'news2Title', dateKey: 'news2Date', excerptKey: 'news2Excerpt', category: 'event', img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80' },
  { titleKey: 'news3Title', dateKey: 'news3Date', excerptKey: 'news3Excerpt', category: 'campus', img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80' },
  { titleKey: 'news4Title', dateKey: 'news4Date', excerptKey: 'news4Excerpt', category: 'achievement', img: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80' },
  { titleKey: 'news5Title', dateKey: 'news5Date', excerptKey: 'news5Excerpt', category: 'academic', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80' },
  { titleKey: 'news6Title', dateKey: 'news6Date', excerptKey: 'news6Excerpt', category: 'sports', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80' },
];

const categories = {
  EN: [
    { id: 'all', label: 'All News' },
    { id: 'achievement', label: 'Achievements' },
    { id: 'event', label: 'Events' },
    { id: 'campus', label: 'Campus' },
    { id: 'academic', label: 'Academic' },
    { id: 'sports', label: 'Sports' },
  ],
  AR: [
    { id: 'all', label: 'كل الأخبار' },
    { id: 'achievement', label: 'الإنجازات' },
    { id: 'event', label: 'الفعاليات' },
    { id: 'campus', label: 'الحرم الجامعي' },
    { id: 'academic', label: 'الأكاديمي' },
    { id: 'sports', label: 'الرياضة' },
  ],
};

export default function NewsPage() {
  const { lang } = useContext(LangContext);
  const txt = translations[lang] || translations.EN;
  const isAR = lang === 'AR';
  const [activeCategory, setActiveCategory] = useState('all');
  const cats = categories[lang] || categories.EN;
  useReveal();

  const filtered = activeCategory === 'all'
    ? allNews
    : allNews.filter(n => n.category === activeCategory);

  const featured = allNews[0];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=85" alt="News" />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content">
          <span className="section-label reveal">{txt.newsLabel}</span>
          <h1 className="reveal delay-1">{txt.newsTitle}</h1>
          <p className="page-hero-breadcrumb reveal delay-2">
            <Link to="/">{txt.home}</Link> · {txt.news}
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured-news">
        <div className="container">
          <div className="featured-grid reveal">
            <div className="featured-img">
              <img src={featured.img} alt={txt[featured.titleKey]} />
              <div className="featured-img-overlay" />
              <div className="featured-cat-badge">
                {isAR ? 'إنجاز' : 'Achievement'}
              </div>
            </div>
            <div className="featured-body">
              <span className="section-label">{isAR ? 'أبرز الأخبار' : 'Featured Story'}</span>
              <h2 className="featured-title">{txt[featured.titleKey]}</h2>
              <div className="section-divider" />
              <p className="featured-date">{txt[featured.dateKey]}</p>
              <p className="featured-excerpt">{txt[featured.excerptKey]}</p>
              <p className="featured-excerpt" style={{ marginTop: 16 }}>
                {isAR
                  ? 'حقق طلاب مدرسة الدوحة الثانوية نتائج استثنائية في هذا العام الدراسي، مما يعكس مستوى التميز الذي تسعى إليه المدرسة منذ تأسيسها عام 1980.'
                  : 'Doha High School students have achieved exceptional results this academic year, reflecting the level of excellence the school has pursued since its founding in 1980.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALL NEWS */}
      <section className="all-news-section">
        <div className="container">
          {/* FILTER */}
          <div className="news-filter reveal">
            {cats.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="news-all-grid">
            {filtered.map((item, i) => (
              <article
                className="news-article-card reveal"
                key={item.titleKey}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="nac-img">
                  <img src={item.img} alt={txt[item.titleKey]} />
                  <div className="nac-overlay" />
                  <div className="nac-cat">
                    {cats.find(c => c.id === item.category)?.label || item.category}
                  </div>
                </div>
                <div className="nac-body">
                  <span className="news-date">{txt[item.dateKey]}</span>
                  <h3 className="nac-title">{txt[item.titleKey]}</h3>
                  <p className="nac-excerpt">{txt[item.excerptKey]}</p>
                  <div className="nac-footer">
                    <span className="nac-read">
                      {txt.readMore}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-results reveal">
              <p>{isAR ? 'لا توجد أخبار في هذه الفئة حالياً.' : 'No news in this category yet.'}</p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="newsletter-bg">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80" alt="School" />
          <div className="newsletter-overlay" />
        </div>
        <div className="container">
          <div className="newsletter-inner reveal">
            <span className="section-label">{isAR ? 'ابق على اطلاع' : 'Stay Updated'}</span>
            <h2 className="section-title white">{isAR ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}</h2>
            <div className="section-divider center" />
            <p>{isAR ? 'احصل على آخر أخبار المدرسة وفعالياتها مباشرة في بريدك الإلكتروني.' : 'Get the latest school news and events delivered straight to your inbox.'}</p>
            <div className="newsletter-form">
              <input
                className="newsletter-input"
                type="email"
                placeholder={isAR ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
              />
              <button className="btn-gold">
                {isAR ? 'اشترك' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}