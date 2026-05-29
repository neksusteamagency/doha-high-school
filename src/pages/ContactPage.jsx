import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../App';
import { translations } from '../translations/Translations';
import { useReveal } from '../hooks/useReveal';
import './ContactPage.css';

const WHATSAPP_NUMBER = '96171415411';

export default function ContactPage() {
  const { lang } = useContext(LangContext);
  const txt = translations[lang] || translations.EN;
  const isAR = lang === 'AR';
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  useReveal(); 

  const handleChange = (field, val) => setFormData(prev => ({ ...prev, [field]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = isAR
      ? `مرحباً،\n\nالاسم: ${formData.name}\nالبريد: ${formData.email}\nالهاتف: ${formData.phone}\nالموضوع: ${formData.subject}\n\nالرسالة:\n${formData.message}`
      : `Hello,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  const contactItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      enTitle: 'Our Location', arTitle: 'موقعنا',
      content: txt.address,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      enTitle: 'Phone Numbers', arTitle: 'أرقام الهاتف',
      content: null,
      phones: [txt.phone1],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      enTitle: 'Email Addresses', arTitle: 'البريد الإلكتروني',
      content: null,
      emails: [txt.email1],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      enTitle: 'Office Hours', arTitle: 'ساعات العمل',
      content: txt.hours,
      sub: isAR ? 'السبت والأحد: إجازة' : 'Sat & Sun: Closed',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="contact2.png" alt="Contact" />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content">
          <span className="section-label reveal">{txt.contactLabel}</span>
          <h1 className="reveal delay-1">{txt.contactTitle}</h1>
          <p className="page-hero-breadcrumb reveal delay-2">
            <Link to="/">{txt.home}</Link> · {txt.contact}
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            {contactItems.map((item, i) => (
              <div className={`contact-info-card reveal delay-${i + 1}`} key={i}>
                <div className="cic-icon">{item.icon}</div>
                <h4>{isAR ? item.arTitle : item.enTitle}</h4>
                {item.content && <p>{item.content}</p>}
                {item.sub && <p className="cic-sub">{item.sub}</p>}
                {item.phones && (
                  <div className="cic-links">
                    {item.phones.map((p, j) => (
                      <a key={j} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
                    ))}
                  </div>
                )}
                {item.emails && (
                  <div className="cic-links">
                    {item.emails.map((e, j) => (
                      <a key={j} href={`mailto:${e}`}>{e}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-main-grid">
            {/* FORM */}
            <div className="contact-form-wrap reveal-left">
              <span className="section-label">{isAR ? 'راسلنا' : 'Send a Message'}</span>
              <h2 className="section-title">{isAR ? 'تواصل معنا' : 'Get In Touch'}</h2>
              <div className="section-divider" />

              {!sent ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">{isAR ? 'الاسم الكامل' : 'Full Name'} *</label>
                      <input className="form-input" type="text" required placeholder={isAR ? 'أدخل اسمك' : 'Enter your name'} value={formData.name} onChange={e => handleChange('name', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{isAR ? 'البريد الإلكتروني' : 'Email Address'} *</label>
                      <input className="form-input" type="email" required placeholder={isAR ? 'أدخل بريدك الإلكتروني' : 'Enter your email'} value={formData.email} onChange={e => handleChange('email', e.target.value)} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">{isAR ? 'رقم الهاتف' : 'Phone Number'}</label>
                      <input className="form-input" type="tel" placeholder={isAR ? 'مثال: +961 03 123 456' : 'e.g. +961 03 123 456'} value={formData.phone} onChange={e => handleChange('phone', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{isAR ? 'الموضوع' : 'Subject'} *</label>
                      <select className="form-select" required value={formData.subject} onChange={e => handleChange('subject', e.target.value)}>
                        <option value="">{isAR ? 'اختر موضوعاً' : 'Select a subject'}</option>
                        <option value="admissions">{isAR ? 'القبول والتسجيل' : 'Admissions & Enrollment'}</option>
                        <option value="academics">{isAR ? 'المناهج الدراسية' : 'Academic Programs'}</option>
                        <option value="fees">{isAR ? 'الرسوم الدراسية' : 'Tuition & Fees'}</option>
                        <option value="general">{isAR ? 'استفسار عام' : 'General Inquiry'}</option>
                        <option value="other">{isAR ? 'أخرى' : 'Other'}</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">{isAR ? 'رسالتك' : 'Your Message'} *</label>
                    <textarea className="form-textarea" required rows={6} placeholder={isAR ? 'اكتب رسالتك هنا...' : 'Write your message here...'} value={formData.message} onChange={e => handleChange('message', e.target.value)} style={{ minHeight: 160 }} />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn-primary">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      {isAR ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}
                    </button>
                    <a href={`https://wa.me/${96171415411}`} target="_blank" rel="noreferrer" className="whatsapp-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      {isAR ? 'تواصل مباشرة' : 'Direct Chat'}
                    </a>
                  </div>
                </form>
              ) : (
                <div className="contact-success">
                  <div className="success-icon">✅</div>
                  <h3>{isAR ? 'تم الإرسال!' : 'Message Sent!'}</h3>
                  <p>{isAR ? 'تم فتح واتساب برسالتك. سيتواصل معك فريقنا في أقرب وقت.' : 'WhatsApp has been opened with your message. Our team will get back to you shortly.'}</p>
                  <button className="btn-primary" style={{ marginTop: 24 }} onClick={() => { setSent(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}>
                    {isAR ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              )}
            </div>

            {/* MAP */}
            <div className="map-wrap reveal-right">
              <div className="map-header">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>{isAR ? txt.locationTitle : txt.locationTitle}</span>
              </div>
              <div className="map-container">
           <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.123054744419!2d35.45901087395695!3d33.75748587326933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1c374c560f17%3A0xe0b85807476b9bdb!2sDoha%20High%20School!5e0!3m2!1ses!2slb!4v1779042329966!5m2!1ses!2slb"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" ></iframe>
              </div>
              <div className="map-address-bar">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>{txt.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL + QUICK CTA */}
      <section className="contact-social-section">
        <div className="container">
          <div className="contact-social-inner reveal">
            <div className="social-cta-text">
              <h3>{isAR ? 'تابعنا على وسائل التواصل الاجتماعي' : 'Follow Us on Social Media'}</h3>
              <p>{isAR ? 'ابق على تواصل معنا وتابع آخر أخبارنا وفعالياتنا.' : 'Stay connected and follow our latest news and events.'}</p>
            </div>
            <div className="social-links-large">
              {[
                { href: 'https://www.facebook.com/share/18uUiBNndR/', label: 'Facebook', color: '#1877F2', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { href: 'https://www.instagram.com/dohahighschool?igsh=d254ZHppOWZmZDVv', label: 'Instagram', color: '#E4405F', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                { href: `https://wa.me/${96171415411}`, label: 'WhatsApp', color: '#25D366', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link-large"
                  aria-label={s.label}
                  style={{ '--social-color': s.color }}
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}