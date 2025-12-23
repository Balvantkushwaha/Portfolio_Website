import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.description}>
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.homeButton}>
              ← Back to Home
            </Link>
            {/* <Link to="/contact" className={styles.contactButton}>
              Contact Me
            </Link> */}
          </div>
        </div>
        <div className={styles.illustration}>
          <div className={styles.codeIcon}>💻</div>
          <div className={styles.errorCode}>
            <span className={styles.errorLine}>Error: 404</span>
            <span className={styles.errorLine}>Status: Page Not Found</span>
            <span className={styles.errorLine}>Solution: Navigate to Home</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;