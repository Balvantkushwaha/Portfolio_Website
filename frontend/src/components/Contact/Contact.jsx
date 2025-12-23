import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@example.com',
      link: 'mailto:hello@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/username',
      link: 'https://linkedin.com/in/username'
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>Let's discuss your project or just say hello!</p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <p className={styles.infoDescription}>
                Feel free to reach out for collaborations, opportunities, or just to chat about technology.
              </p>
              
              <div className={styles.infoItems}>
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoItem}
                  >
                    <div className={styles.infoIcon}>{item.icon}</div>
                    <div className={styles.infoContent}>
                      <h4 className={styles.infoItemTitle}>{item.title}</h4>
                      <p className={styles.infoItemValue}>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className={styles.socialLinks}>
                <h4 className={styles.socialTitle}>Follow Me</h4>
                <div className={styles.socialIcons}>
                  {['🐙', '💼', '🐦', '📷'].map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className={styles.socialIcon}
                      onClick={(e) => e.preventDefault()}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              
              {formStatus.submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✅</div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  <button
                    className={styles.newMessageButton}
                    onClick={() => setFormStatus({ submitted: false, submitting: false, error: null })}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.textarea}
                      placeholder="Hello, I'm interested in..."
                      rows={5}
                      required
                    ></textarea>
                  </div>

                  {formStatus.error && (
                    <div className={styles.errorMessage}>
                      ❌ {formStatus.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? (
                      <>
                        <span className={styles.spinner}></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className={styles.footerNote}>
          <p>
            Currently open to: <span className={styles.highlight}>Full-time opportunities</span>, 
            <span className={styles.highlight}> Freelance projects</span>, and 
            <span className={styles.highlight}> Technical consulting</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;