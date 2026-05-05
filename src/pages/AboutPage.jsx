import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../App';
import { translations } from '../translations/Translations';
import { useReveal } from '../hooks/useReveal';
import './AboutPage.css';

const values = [
  { icon: '🎓', enTitle: 'Academic Excellence', arTitle: 'التميز الأكاديمي', enText: 'We hold our students to the highest academic standards, preparing them for the world\'s best universities.', arText: 'نضع معايير أكاديمية عالية تؤهل طلابنا لأفضل الجامعات في العالم.' },
  { icon: '⚖️', enTitle: 'Integrity & Values', arTitle: 'النزاهة والقيم', enText: 'Built on Islamic values and ethical principles, we nurture character as much as intellect.', arText: 'مبنية على القيم الإسلامية والمبادئ الأخلاقية، نصقل الشخصية بقدر العقل.' },
  { icon: '🌍', enTitle: 'Global Citizenship', arTitle: 'المواطنة العالمية', enText: 'We prepare students to be confident, compassionate leaders in an interconnected world.', arText: 'نعد الطلاب ليكونوا قادة واثقين ومتعاطفين في عالم مترابط.' },
  { icon: '🤝', enTitle: 'Community & Belonging', arTitle: 'المجتمع والانتماء', enText: 'Our diverse community fosters deep connections, mutual respect, and lifelong friendships.', arText: 'يعزز مجتمعنا المتنوع الروابط العميقة والاحترام المتبادل والصداقات الدائمة.' },
];

const milestones = [
  { year: '1980', enText: 'School founded by Dr. Khalid Al-Rashidi with 120 students', arText: 'تأسست المدرسة على يد د. خالد الراشدي بـ 120 طالباً' },
  { year: '1988', enText: 'First graduating class achieves 100% university placement', arText: 'أول دفعة تحقق نسبة 100٪ في القبول الجامعي' },
  { year: '1995', enText: 'New campus inaugurated — enrollment reaches 1,000 students', arText: 'افتتاح الحرم الجديد — الالتحاق يصل إلى 1000 طالب' },
  { year: '2003', enText: 'International Baccalaureate program launched', arText: 'إطلاق برنامج البكالوريا الدولية' },
  { year: '2010', enText: 'State-of-the-art science and technology wing opens', arText: 'افتتاح جناح العلوم والتكنولوجيا الحديث' },
  { year: '2018', enText: 'Ranked #1 private school in Qatar by Ministry of Education', arText: 'تصنيف الأول بين المدارس الخاصة في قطر' },
  { year: '2024', enText: '12,000+ alumni worldwide — legacy continues to grow', arText: '+12,000 خريج حول العالم — الإرث يتواصل' },
];

export default function AboutPage() {
  const { lang } = useContext(LangContext);
  const txt = translations[lang] || translations.EN;
  const isAR = lang === 'AR';
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=85" alt="School" />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content">
          <span className="section-label reveal">{txt.aboutLabel}</span>
          <h1 className="reveal delay-1">{txt.aboutTitle}</h1>
          <p className="page-hero-breadcrumb reveal delay-2">
            <Link to="/">{txt.home}</Link> · {txt.about}
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="reveal-left">
              <span className="section-label">{txt.aboutLabel}</span>
              <h2 className="section-title">{txt.aboutTitle}</h2>
              <div className="section-divider" />
              <p>{txt.aboutText1}</p>
              <p style={{ marginTop: '20px' }}>{txt.aboutText2}</p>
            </div>
            <div className="mission-img reveal-right">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=85" alt="Students learning" />
              <div className="mission-img-accent">
                <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=85" alt="Classroom" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{isAR ? 'قيمنا' : 'Our Values'}</span>
            <h2 className="section-title">{isAR ? 'ما نؤمن به' : 'What We Stand For'}</h2>
            <div className="section-divider center" />
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className={`value-card reveal delay-${i + 1}`} key={i}>
                <div className="value-icon">{v.icon}</div>
                <h3>{isAR ? v.arTitle : v.enTitle}</h3>
                <p>{isAR ? v.arText : v.enText}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="about-founder">
        <div className="founder-bg2">
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80" alt="Education" />
          <div className="founder-overlay2" />
        </div>
        <div className="container">
          <div className="founder-grid">
            <div className="founder-img-wrap reveal-left">
              <div className="founder-portrait-large">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85" alt={txt.founderName} />
              </div>
              <div className="founder-card-overlay">
                <p className="founder-card-name">{txt.founderName}</p>
                <p className="founder-card-role">{txt.founderTitle2}</p>
              </div>
            </div>
            <div className="founder-details reveal-right">
              <span className="section-label">{txt.founderLabel}</span>
              <h2 className="section-title white">{txt.founderTitle}</h2>
              <div className="section-divider" />
              <blockquote className="about-founder-quote">{txt.founderQuote}</blockquote>
              <p className="founder-bio-full">{txt.founderText}</p>
              <div className="founder-stats-row">
                <div className="f-stat"><span className="f-stat-num">25</span><span className="f-stat-label">{isAR ? 'سنة من القيادة' : 'Years of Leadership'}</span></div>
                <div className="f-stat"><span className="f-stat-num">2,000+</span><span className="f-stat-label">{isAR ? 'طالب في عهده' : 'Students Under His Watch'}</span></div>
                <div className="f-stat"><span className="f-stat-num">1980</span><span className="f-stat-label">{isAR ? 'سنة التأسيس' : 'Year of Founding'}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{isAR ? 'مسيرتنا' : 'Our Journey'}</span>
            <h2 className="section-title">{isAR ? 'أربعة عقود من التميز' : 'Four Decades of Excellence'}</h2>
            <div className="section-divider center" />
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal`} key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="timeline-content">
                  <div className="timeline-year">{m.year}</div>
                  <p>{isAR ? m.arText : m.enText}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="leadership-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{isAR ? 'إدارتنا' : 'Leadership'}</span>
            <h2 className="section-title">{isAR ? 'فريق القيادة' : 'Our Leadership Team'}</h2>
            <div className="section-divider center" />
          </div>
          <div className="leadership-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85', enName: 'Dr. Fatima Al-Mansoori', arName: 'د. فاطمة المنصوري', enRole: 'Principal', arRole: 'المدير العام' },
              { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85', enName: 'Mr. Hassan Al-Qahtani', arName: 'أ. حسن القحطاني', enRole: 'Vice Principal – Academics', arRole: 'نائب المدير – الأكاديميات' },
              { img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85', enName: 'Ms. Layla Ibrahim', arName: 'أ. ليلى إبراهيم', enRole: 'Head of Student Affairs', arRole: 'رئيسة شؤون الطلاب' },
              { img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=85', enName: 'Mr. Omar Al-Nasser', arName: 'أ. عمر الناصر', enRole: 'Head of Admissions', arRole: 'رئيس القبول' },
            ].map((p, i) => (
              <div className={`leader-card reveal delay-${i + 1}`} key={i}>
                <div className="leader-img">
                  <img src={p.img} alt={isAR ? p.arName : p.enName} />
                </div>
                <div className="leader-info">
                  <h3>{isAR ? p.arName : p.enName}</h3>
                  <p>{isAR ? p.arRole : p.enRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-inner reveal">
            <h2>{isAR ? 'انضم إلى عائلة مدرسة الدوحة' : 'Join the Doha High School Family'}</h2>
            <p>{isAR ? 'ابدأ رحلة التميز الأكاديمي اليوم' : 'Begin your journey of academic excellence today'}</p>
            <div className="about-cta-btns">
              <Link to="/admissions" className="btn-gold">{txt.applyNow}</Link>
              <Link to="/contact" className="btn-outline" style={{ color: 'var(--navy)', borderColor: 'var(--navy)' }}>{txt.contact}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}