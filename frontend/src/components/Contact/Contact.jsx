
import React from 'react';
import styles from './Contact.module.css';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Contact = () => {

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'balvant09@gmail.com',
      link: 'mailto:balvant09@gmail.com'
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      value: '+91 9098781664',
      link: 'tel:+91 9098781664'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Chhatarpur, MP, India',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Let’s build something impactful together.
          </p>
        </div>

        {/* Contact Card */}
        <div className={styles.card}>

          {/* Contact Info */}
          <div className={styles.infoRow}>
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoItem}
              >
                <span className={styles.infoIcon}>{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Section */}
          <div className={styles.socialSection}>
            <h4 className={styles.socialTitle}>Follow Me</h4>

            <div className={styles.socialIcons}>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaLinkedin />
              </a>

              <a
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaTwitter />
              </a>

              <a
                href="https://instagram.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaInstagram />
              </a>
            </div>

            {/* CTA */}
            <div className={styles.ctaBox}>
              <span>Have a Question?</span>
              <button
                onClick={() =>
                  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdgOSa_HVTk8raiEYaCMxwSNc2jXVhEPFyO8MsJtwUgQkXQ0w/viewform'
                }
              >
                Click Here
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
