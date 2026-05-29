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
    img: 'math2.jpg',
    enCourses: ['Biology', 'Chemistry', 'Physics', 'Math', 'Environmental Science'],
    arCourses: ['طبيعيات','كيمياء','فيزياء','رياضيات','علم البيئة'] },
  {
    icon: '📚',
    enTitle: 'Humanities & Literature',
    arTitle: 'الإنسانيات والأدب',
    enDesc: 'A rigorous exploration of history, philosophy, Arabic & English literature, and social sciences cultivating critical thinkers.',
    arDesc: 'استكشاف دقيق للتاريخ والفلسفة والأدب العربي والإنجليزي والعلوم الاجتماعية لتنمية المفكرين الناقدين.',
    img: 'lit.jpg',
    enCourses: ['Arabic Literature', 'English Literature', 'World History', 'Philosophy', 'Sociology', 'Economics'],
    arCourses: ['الأدب العربي', 'الأدب الإنجليزي', 'التاريخ العالمي', 'الفلسفة', 'علم الاجتماع', 'الاقتصاد'],
  },
  {
    icon: '🎨',
    enTitle: 'Arts & Design',
    arTitle: 'الفنون والتصميم',
    enDesc: 'Visual arts and Design programs nurturing creativity and artistic expression in every student.',
    arDesc: 'برامج الفنون البصرية والتصميم الجرافيكي والموسيقى والفنون المسرحية لتنمية الإبداع لدى كل طالب.',
    img: 'arts.png',
    enCourses: ['Visual Arts', 'Drawing', 'Projects', ' Outdoor Activities' ],
    arCourses: ['الفنون البصرية', 'الرسم', 'المشاريع', 'الأنشطة الخارجية'],
  },
  {
    icon: '💻',
    enTitle: 'Technology & Computing',
    arTitle: 'التكنولوجيا والحوسبة',
    enDesc: 'Computer science, programming, robotics, and digital literacy courses preparing students for the technology-driven future.',
    arDesc: 'علوم الحاسوب والبرمجة والروبوتات ومقررات محو الأمية الرقمية لإعداد الطلاب لمستقبل تقني.',
    img: 'robot.png',
    enCourses: ['Computer Science', 'Programming', 'Robotics'],
    arCourses: ['علوم الحاسوب', 'البرمجة', 'الروبوتات'],
  },
  {
    icon: '🌐',
    enTitle: 'Languages',
    arTitle: 'اللغات',
    enDesc: 'Arabic, English, and French language programs with immersive learning environments and certified instructors.',
    arDesc: 'برامج اللغات العربية والإنجليزية والفرنسية والماندرين مع بيئات تعلم غامرة ومدرسين معتمدين.',
    img: 'lang.png',
    enCourses: ['Arabic', 'English', 'French'],
    arCourses: ['اللغة العربية', 'اللغة لانجليزية  ', 'اللغة الفرنسية'],
  },
  {
    icon: '⚽',
    enTitle: 'Physical Education',
    arTitle: 'التربية البدنية',
    enDesc: 'Comprehensive sports and wellness programs including football, basketball, and mindfulness.',
    arDesc: 'برامج رياضية وصحية شاملة تشمل كرة القدم والسلة وألعاب القوى واليقظة الذهنية.',
    img: 'sport.png',
    enCourses: ['Football', 'Basketball', 'Health & Wellness', 'Muay Thai', 'Ballet Dancing'],
    arCourses: ['كرة القدم', 'كرة السلة', 'الصحة واللياقة','مواي تاي','رقص الباليه'],
  },
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
          <img src="library22.png" alt="Academics" />
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
                ? 'نوفّر للطلاب النظامين التعليميين اللبناني والأمريكي، من مرحلة الروضة حتى المرحلة الثانوية. ما بدأ كرؤية لتقديم تعليم عالمي المستوى، أصبح اليوم إحدى أكثر المؤسسات التعليمية احترامًا في المنطقة.'
                : 'We provide both the Lebanese and American educational system for students from kindergarten through High school. What began as a vision to provide world-class education has blossomed into one of the religion\'s most respected institutions.'
              }</p>
            </div>
            <div className="academics-highlights reveal-right">
              {[
                { num: '98%', enLabel: 'University Placement Rate', arLabel: 'نسبة القبول الجامعي' },
                { num: '24+', enLabel: 'Academic Programs', arLabel: 'برنامج أكاديمي' },
                { num: '100+', enLabel: 'Qualified Faculty', arLabel: 'عضو هيئة تدريس مؤهل' },
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

     


      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-inner reveal">
            <h2>{isAR ? 'هل أنت مستعد لرحلة التعلم؟' : 'Ready to Begin Your Academic Journey?'}</h2>
            <p>{isAR ? 'سجل الآن للعام الدراسي 2027–2026' : 'Enroll now for the 2026–2027 academic year'}</p>
            <div className="about-cta-btns">
              <Link to="/admissions" className="btn-gold">{txt.applyNow}</Link>
              <Link to="/contact" className="btn-outline" style={{ color: 'var(--white)', borderColor: 'var(--white)' }}>{txt.contact}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}