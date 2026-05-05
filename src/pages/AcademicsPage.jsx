import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../App';
import { translations } from '../translations/Translations';
import { useReveal } from '../hooks/useReveal';
import './AcademicsPage.css';

const departments = [
  {
    icon: '⚗️',
    enTitle: 'Sciences & Mathematics',
    arTitle: 'العلوم والرياضيات',
    enDesc: 'Advanced coursework in Biology, Chemistry, Physics, and Mathematics with fully equipped laboratories and research facilities.',
    arDesc: 'مناهج متقدمة في الأحياء والكيمياء والفيزياء والرياضيات مع مختبرات ومرافق بحثية مجهزة بالكامل.',
    img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
    enCourses: ['AP Biology', 'AP Chemistry', 'AP Physics', 'AP Calculus', 'Statistics', 'Environmental Science'],
    arCourses: ['أحياء متقدم', 'كيمياء متقدمة', 'فيزياء متقدمة', 'حساب التفاضل', 'الإحصاء', 'علم البيئة'],
  },
  {
    icon: '📚',
    enTitle: 'Humanities & Literature',
    arTitle: 'الإنسانيات والأدب',
    enDesc: 'A rigorous exploration of history, philosophy, Arabic & English literature, and social sciences cultivating critical thinkers.',
    arDesc: 'استكشاف دقيق للتاريخ والفلسفة والأدب العربي والإنجليزي والعلوم الاجتماعية لتنمية المفكرين الناقدين.',
    img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80',
    enCourses: ['Arabic Literature', 'English Literature', 'World History', 'Philosophy', 'Sociology', 'Islamic Studies'],
    arCourses: ['الأدب العربي', 'الأدب الإنجليزي', 'التاريخ العالمي', 'الفلسفة', 'علم الاجتماع', 'الدراسات الإسلامية'],
  },
  {
    icon: '🎨',
    enTitle: 'Arts & Design',
    arTitle: 'الفنون والتصميم',
    enDesc: 'Visual arts, graphic design, music, and performing arts programs nurturing creativity and artistic expression in every student.',
    arDesc: 'برامج الفنون البصرية والتصميم الجرافيكي والموسيقى والفنون المسرحية لتنمية الإبداع لدى كل طالب.',
    img: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80',
    enCourses: ['Visual Arts', 'Graphic Design', 'Music Theory', 'Drama & Theatre', 'Photography', 'Calligraphy'],
    arCourses: ['الفنون البصرية', 'التصميم الجرافيكي', 'نظرية الموسيقى', 'الدراما والمسرح', 'التصوير', 'الخط العربي'],
  },
  {
    icon: '💻',
    enTitle: 'Technology & Computing',
    arTitle: 'التكنولوجيا والحوسبة',
    enDesc: 'Computer science, programming, robotics, and digital literacy courses preparing students for the technology-driven future.',
    arDesc: 'علوم الحاسوب والبرمجة والروبوتات ومقررات محو الأمية الرقمية لإعداد الطلاب لمستقبل تقني.',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    enCourses: ['Computer Science', 'Python Programming', 'Robotics', 'Web Development', 'AI & Data Science', 'Cybersecurity'],
    arCourses: ['علوم الحاسوب', 'برمجة بايثون', 'الروبوتات', 'تطوير الويب', 'الذكاء الاصطناعي', 'الأمن الإلكتروني'],
  },
  {
    icon: '🌐',
    enTitle: 'Languages',
    arTitle: 'اللغات',
    enDesc: 'Arabic, English, French, and Mandarin language programs with immersive learning environments and certified instructors.',
    arDesc: 'برامج اللغات العربية والإنجليزية والفرنسية والماندرين مع بيئات تعلم غامرة ومدرسين معتمدين.',
    img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80',
    enCourses: ['Arabic (Native)', 'English (IGCSE)', 'French', 'Mandarin Chinese', 'Public Speaking', 'Debate'],
    arCourses: ['اللغة العربية', 'الإنجليزية (IGCSE)', 'الفرنسية', 'الصينية الماندرينية', 'الخطابة', 'المناظرة'],
  },
  {
    icon: '⚽',
    enTitle: 'Physical Education',
    arTitle: 'التربية البدنية',
    enDesc: 'Comprehensive sports and wellness programs including football, basketball, swimming, athletics, and mindfulness.',
    arDesc: 'برامج رياضية وصحية شاملة تشمل كرة القدم والسلة والسباحة وألعاب القوى واليقظة الذهنية.',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    enCourses: ['Football', 'Basketball', 'Swimming', 'Athletics', 'Volleyball', 'Health & Wellness'],
    arCourses: ['كرة القدم', 'كرة السلة', 'السباحة', 'ألعاب القوى', 'الكرة الطائرة', 'الصحة واللياقة'],
  },
];

const facilities = [
  { icon: '🔬', enName: 'Science Laboratories', arName: 'مختبرات العلوم' },
  { icon: '💻', enName: 'Computer Labs', arName: 'مختبرات الحاسوب' },
  { icon: '📖', enName: 'Library & Media Center', arName: 'المكتبة ومركز الإعلام' },
  { icon: '🎭', enName: 'Performing Arts Hall', arName: 'قاعة الفنون المسرحية' },
  { icon: '🏊', enName: 'Olympic Swimming Pool', arName: 'حوض السباحة الأولمبي' },
  { icon: '⚽', enName: 'Sports Complex', arName: 'المجمع الرياضي' },
  { icon: '🎨', enName: 'Art Studios', arName: 'استوديوهات الفن' },
  { icon: '🤖', enName: 'Robotics & Innovation Lab', arName: 'مختبر الروبوتات والابتكار' },
];

export default function AcademicsPage() {
  const { lang } = useContext(LangContext);
  const txt = translations[lang] || translations.EN;
  const isAR = lang === 'AR';
  const [activeTab, setActiveTab] = useState(0);
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=85" alt="Academics" />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content">
          <span className="section-label reveal">{txt.academicsLabel}</span>
          <h1 className="reveal delay-1">{txt.academicsTitle}</h1>
          <p className="page-hero-breadcrumb reveal delay-2">
            <Link to="/">{txt.home}</Link> · {txt.academics}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="academics-intro">
        <div className="container">
          <div className="academics-intro-grid">
            <div className="reveal-left">
              <span className="section-label">{txt.academicsLabel}</span>
              <h2 className="section-title">{isAR ? 'منهج عالمي المستوى' : 'A World-Class Curriculum'}</h2>
              <div className="section-divider" />
              <p>{isAR
                ? 'تقدم مدرسة الدوحة الثانوية منهجاً دراسياً شاملاً يوازن بين المعرفة الأكاديمية وتنمية المهارات العملية. برامجنا معترف بها دولياً وتؤهل طلابنا لأبرز الجامعات العالمية.'
                : 'Doha High School offers a comprehensive curriculum balancing academic knowledge with practical skills. Our programs are internationally recognized, preparing students for the world\'s leading universities.'
              }</p>
              <p style={{ marginTop: '20px' }}>{isAR
                ? 'نحن نقدم مسارات IGCSE والبكالوريا الدولية، إلى جانب مناهج وطنية قطرية معتمدة، مما يمنح طلابنا مرونة التكيف مع متطلبات التعليم العالي في أي مكان في العالم.'
                : 'We offer IGCSE and International Baccalaureate tracks alongside Qatar\'s national curriculum, giving students flexibility to meet higher education requirements anywhere in the world.'
              }</p>
            </div>
            <div className="academics-highlights reveal-right">
              {[
                { num: '98%', enLabel: 'University Placement Rate', arLabel: 'نسبة القبول الجامعي' },
                { num: '24+', enLabel: 'Academic Programs', arLabel: 'برنامج أكاديمي' },
                { num: '180+', enLabel: 'Qualified Faculty', arLabel: 'عضو هيئة تدريس مؤهل' },
                { num: '15:1', enLabel: 'Student-Teacher Ratio', arLabel: 'نسبة الطلاب للمعلمين' },
              ].map((h, i) => (
                <div className="acad-highlight" key={i}>
                  <div className="acad-highlight-num">{h.num}</div>
                  <div className="acad-highlight-label">{isAR ? h.arLabel : h.enLabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS TABS */}
      <section className="departments-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{isAR ? 'الأقسام' : 'Departments'}</span>
            <h2 className="section-title">{isAR ? 'استكشف برامجنا' : 'Explore Our Programs'}</h2>
            <div className="section-divider center" />
          </div>
          <div className="dept-tabs reveal">
            {departments.map((d, i) => (
              <button
                key={i}
                className={`dept-tab ${activeTab === i ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <span>{d.icon}</span>
                <span>{isAR ? d.arTitle : d.enTitle}</span>
              </button>
            ))}
          </div>
          <div className="dept-panel">
            {departments.map((d, i) => (
              <div className={`dept-content ${activeTab === i ? 'active' : ''}`} key={i}>
                <div className="dept-content-grid">
                  <div className="dept-img">
                    <img src={d.img} alt={isAR ? d.arTitle : d.enTitle} />
                  </div>
                  <div className="dept-info">
                    <div className="dept-icon-large">{d.icon}</div>
                    <h3>{isAR ? d.arTitle : d.enTitle}</h3>
                    <p>{isAR ? d.arDesc : d.enDesc}</p>
                    <div className="dept-courses">
                      <h4>{isAR ? 'المقررات الدراسية' : 'Courses Offered'}</h4>
                      <ul>
                        {(isAR ? d.arCourses : d.enCourses).map((c, j) => (
                          <li key={j}><span className="course-dot" />{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="facilities-section">
        <div className="facilities-bg">
          <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80" alt="Facilities" />
          <div className="facilities-overlay" />
        </div>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{isAR ? 'مرافقنا' : 'Our Facilities'}</span>
            <h2 className="section-title white">{isAR ? 'بنية تحتية عالمية' : 'World-Class Infrastructure'}</h2>
            <div className="section-divider center" />
          </div>
          <div className="facilities-grid">
            {facilities.map((f, i) => (
              <div className={`facility-card reveal delay-${(i % 4) + 1}`} key={i}>
                <div className="facility-icon">{f.icon}</div>
                <div className="facility-name">{isAR ? f.arName : f.enName}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS TRACK */}
      <section className="tracks-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{isAR ? 'المسارات' : 'Academic Tracks'}</span>
            <h2 className="section-title">{isAR ? 'اختر مسارك' : 'Choose Your Path'}</h2>
            <div className="section-divider center" />
          </div>
          <div className="tracks-grid">
            {[
              {
                enTitle: 'IGCSE Track', arTitle: 'مسار IGCSE',
                enDesc: 'Cambridge International General Certificate of Secondary Education — globally recognized qualifications for Grades 9 & 10.',
                arDesc: 'شهادة كامبريدج الدولية — مؤهلات معترف بها عالمياً للصفين التاسع والعاشر.',
                color: 'var(--navy)',
              },
              {
                enTitle: 'IB Diploma', arTitle: 'دبلوم البكالوريا الدولية',
                enDesc: 'The International Baccalaureate Diploma Programme for Grades 11 & 12 — the gold standard for university preparation worldwide.',
                arDesc: 'برنامج دبلوم البكالوريا الدولية للصفين الحادي عشر والثاني عشر — المعيار الذهبي للتحضير الجامعي.',
                color: 'var(--gold)',
              },
              {
                enTitle: 'National Curriculum', arTitle: 'المنهج الوطني القطري',
                enDesc: 'Qatar\'s Ministry of Education approved curriculum, integrating Islamic values with modern academic excellence.',
                arDesc: 'المنهج المعتمد من وزارة التربية والتعليم القطرية، يدمج القيم الإسلامية مع التميز الأكاديمي الحديث.',
                color: '#2d7a4f',
              },
            ].map((track, i) => (
              <div className={`track-card reveal delay-${i + 1}`} key={i} style={{ '--track-color': track.color }}>
                <div className="track-accent" />
                <h3>{isAR ? track.arTitle : track.enTitle}</h3>
                <p>{isAR ? track.arDesc : track.enDesc}</p>
                <Link to="/admissions" className="track-apply">
                  {isAR ? 'قدم الآن' : 'Apply Now'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-inner reveal">
            <h2>{isAR ? 'هل أنت مستعد لرحلة التعلم؟' : 'Ready to Begin Your Academic Journey?'}</h2>
            <p>{isAR ? 'سجل الآن للعام الدراسي 2025–2026' : 'Enroll now for the 2025–2026 academic year'}</p>
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