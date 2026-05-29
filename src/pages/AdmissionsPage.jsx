import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../App';
import { translations } from '../translations/Translations';
import { useReveal } from '../hooks/useReveal';
import './AdmissionsPage.css';

const WHATSAPP_NUMBER = '96171415411';

const steps = {
  EN: [
    { num: '01', title: 'Submit Application', desc: 'Complete the online registration form or contact us directly via WhatsApp.' },
    { num: '02', title: 'Document Review', desc: 'Our admissions team reviews your documents within 5 business days.' },
    { num: '03', title: 'Assessment & Interview', desc: 'Students attend a brief academic assessment and parent interview.' },
    { num: '04', title: 'Acceptance Letter', desc: 'Receive your official acceptance letter and complete enrollment.' },
  ],
  AR: [
    { num: '01', title: 'تقديم الطلب', desc: 'أكمل نموذج التسجيل الإلكتروني أو تواصل معنا مباشرة عبر واتساب.' },
    { num: '02', title: 'مراجعة الوثائق', desc: 'تراجع فريق القبول وثائقك خلال 5 أيام عمل.' },
    { num: '03', title: 'التقييم والمقابلة', desc: 'يحضر الطلاب تقييماً أكاديمياً قصيراً ومقابلة مع أولياء الأمور.' },
    { num: '04', title: 'خطاب القبول', desc: 'تلقّ خطاب القبول الرسمي وأتمّ التسجيل.' },
  ],
};

const requirements = {
  EN: ['Birth certificate (original + copy)', 'Previous school transcripts (last 2 years)', 'Passport copy (student & parents)', 'Recent passport-size photographs (4 copies)', 'Medical health records',],
  AR: ['شهادة الميلاد (أصل + نسخة)', 'كشف درجات المدرسة السابقة (آخر سنتين)', 'نسخة من جواز السفر (الطالب والوالدين)', 'صور شخصية حديثة بحجم جواز السفر (4 نسخ)', 'السجلات الطبية', ],
};

const questions = {
  EN: [
    { id: 'childName', label: "What is your child's full name and date of birth?", placeholder: "e.g. Mohammed Al-Ahmad, 15 March 2012" },
    { id: 'grade', label: "Which grade are you applying for?", placeholder: "e.g. Grade 9 " },
    { id: 'notes', label: "Do you have any previous school records or special requirements?", placeholder: "e.g. Transferred from X school, needs learning support, etc." },
  ],
  AR: [
    { id: 'childName', label: 'ما الاسم الكامل لطفلك وتاريخ ميلاده؟', placeholder: 'مثال: محمد الأحمد، 15 مارس 2012' },
    { id: 'grade', label: 'ما الصف الذي تتقدم له؟', placeholder: 'مثال: الصف التاسع' },
    { id: 'notes', label: 'هل لديك سجلات مدرسية سابقة أو متطلبات خاصة؟', placeholder: 'مثال: منقول من مدرسة X، يحتاج دعماً تعليمياً، إلخ.' },
  ],
};

export default function AdmissionsPage() {
  const { lang } = useContext(LangContext);
  const txt = translations[lang] || translations.EN;
  const isAR = lang === 'AR';
  const [mode, setMode] = useState(null); // null | 'form' | 'whatsapp'
  const [answers, setAnswers] = useState({ childName: '', grade: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  useReveal();

  const qs = questions[lang] || questions.EN;
  const reqList = requirements[lang] || requirements.EN;
  const stepList = steps[lang] || steps.EN;

  const handleChange = (id, val) => setAnswers(prev => ({ ...prev, [id]: val }));

  const buildWhatsAppMsg = () => {
    const lines = isAR
      ? [
          '🏫 *طلب قبول - مدرسة الدوحة الثانوية*',
          '',
          `📌 *${qs[0].label}*`,
          answers.childName || '—',
          '',
          `📌 *${qs[1].label}*`,
          answers.grade || '—',
          '',
          `📌 *${qs[2].label}*`,
          answers.notes || '—',
          '',
          '✅ يرجى التواصل معي لاستكمال إجراءات التسجيل.',
        ]
      : [
          '🏫 *Admission Inquiry - Doha High School*',
          '',
          `📌 *${qs[0].label}*`,
          answers.childName || '—',
          '',
          `📌 *${qs[1].label}*`,
          answers.grade || '—',
          '',
          `📌 *${qs[2].label}*`,
          answers.notes || '—',
          '',
          '✅ Please contact me to complete the registration process.',
        ];
    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = () => {
    if (!answers.childName.trim() || !answers.grade.trim()) return;
    const msg = buildWhatsAppMsg();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const directWhatsApp = () => {
    const msg = isAR
      ? encodeURIComponent('مرحباً، أود الاستفسار عن القبول في مدرسة الدوحة الثانوية للعام الدراسي 2027-2026.')
      : encodeURIComponent('Hello, I would like to inquire about admissions to Doha High School for the 2026–2027 academic year.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=85" alt="Admissions" />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content">
          <span className="section-label reveal">{txt.admissionsLabel}</span>
          <h1 className="reveal delay-1">{txt.admissionsTitle}</h1>
          <p className="page-hero-breadcrumb reveal delay-2">
            <Link to="/">{txt.home}</Link> · {txt.admissions}
          </p>
        </div>
      </section>

      {/* REGISTRATION OPEN BANNER */}
      <div className="reg-banner">
        <div className="container">
          <div className="reg-banner-inner">
            <div className="reg-banner-pulse" />
            <span className="reg-banner-text">{txt.registerOpen}</span>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className="admissions-main">
        <div className="container">
          <div className="admissions-split">
            {/* LEFT - info */}
            <div className="admissions-info reveal-left">
              <span className="section-label">{txt.registerTitle}</span>
              <h2 className="section-title">{isAR ? 'كيفية التقديم' : 'How to Apply'}</h2>
              <div className="section-divider" />
              <p>{txt.admissionsText}</p>

              <div className="adm-steps">
                {stepList.map((s, i) => (
                  <div className="adm-step" key={i}>
                    <div className="adm-step-num">{s.num}</div>
                    <div className="adm-step-body">
                      <h4>{s.title}</h4>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="requirements-box">
                <h4>{isAR ? 'الوثائق المطلوبة' : 'Required Documents'}</h4>
                <ul>
                  {reqList.map((r, i) => (
                    <li key={i}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT - registration widget */}
            <div className="admissions-widget reveal-right">
              {mode === null && (
                <div className="widget-choice">
                  <div className="widget-header">
                    <div className="widget-badge">
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <h3>{txt.registerTitle}</h3>
                    <p>{txt.registerOpen}</p>
                  </div>
                  <div className="choice-btns">
                    <button className="choice-btn primary" onClick={() => setMode('form')}>
                      <div className="choice-icon">📝</div>
                      <div className="choice-text">
                        <span className="choice-title">{txt.fillForm}</span>
                        <span className="choice-sub">{isAR ? 'أجب على أسئلة قصيرة وأرسل عبر واتساب' : 'Answer a few questions, send via WhatsApp'}</span>
                      </div>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                    <button className="choice-btn whatsapp" onClick={directWhatsApp}>
                      <div className="choice-icon">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </div>
                      <div className="choice-text">
                        <span className="choice-title">{txt.whatsappDirect}</span>
                        <span className="choice-sub">{isAR ? 'تحدث مباشرة مع فريق القبول' : 'Chat directly with our admissions team'}</span>
                      </div>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                  <p className="widget-hint">{txt.formSubmitHint}</p>
                </div>
              )}

              {mode === 'form' && !submitted && (
                <div className="widget-form">
                  <div className="widget-form-header">
                    <button className="back-btn" onClick={() => setMode(null)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                      {isAR ? 'رجوع' : 'Back'}
                    </button>
                    <h3>{txt.fillForm}</h3>
                  </div>
                  <div className="form-questions">
                    {qs.map((q, i) => (
                      <div className="form-group" key={q.id}>
                        <label className="form-label">
                          <span className="q-num">0{i + 1}</span>
                          {q.label}
                        </label>
                        {i < 2 ? (
                          <input
                            className="form-input"
                            type="text"
                            placeholder={q.placeholder}
                            value={answers[q.id]}
                            onChange={e => handleChange(q.id, e.target.value)}
                          />
                        ) : (
                          <textarea
                            className="form-textarea"
                            placeholder={q.placeholder}
                            value={answers[q.id]}
                            onChange={e => handleChange(q.id, e.target.value)}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="form-hint">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    {txt.formSubmitHint}
                  </p>
                  <button
                    className="whatsapp-btn submit-wa-btn"
                    onClick={handleSubmit}
                    disabled={!answers.childName.trim() || !answers.grade.trim()}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {txt.submit}
                  </button>
                </div>
              )}

              {submitted && (
                <div className="widget-success">
                  <div className="success-icon">✅</div>
                  <h3>{isAR ? 'تم الإرسال بنجاح!' : 'Message Sent!'}</h3>
                  <p>{isAR ? 'تم فتح واتساب برسالتك المكتملة. سيتواصل معك فريقنا قريباً.' : 'WhatsApp opened with your pre-filled message. Our team will reach out to you shortly.'}</p>
                  <button className="btn-primary" style={{ marginTop: '24px' }} onClick={() => { setMode(null); setSubmitted(false); setAnswers({ childName: '', grade: '', notes: '' }); }}>
                    {isAR ? 'إرسال طلب آخر' : 'Submit Another Inquiry'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

