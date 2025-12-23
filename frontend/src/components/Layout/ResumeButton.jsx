// ResumeButton.jsx
import React from 'react';
import styles from './ResumeButton.module.css';

const ResumeButton = () => {
  const handlePrint = () => {
    // Option 1: Open PDF
    window.open('/resume.pdf', '_blank');
    
    // Option 2: Print current page
    // window.print();
  };

  return (
    <button onClick={handlePrint} className={styles.resumeButton}>
      📄 Resume
    </button>
  );
};
export default ResumeButton;
