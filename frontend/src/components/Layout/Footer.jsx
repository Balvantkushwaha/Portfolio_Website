import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/username', icon:  <FaGithub /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon:  <FaLinkedin /> },
    { name: 'Twitter', url: 'https://twitter.com/username', icon: <FaTwitter /> },
    { name : 'Instagram', url: 'https://instagram.com/username', icon:  <FaInstagram /> }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo}>BVK Tech</a>
            <p className={styles.tagline}>Building digital experiences with code</p>
          </div>
          
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={link.name}
              >
                <span className={styles.socialIcon}>{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} BVK Tech. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Built with React & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;