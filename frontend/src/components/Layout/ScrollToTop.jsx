// // BackToTop.jsx
// import React, { useState, useEffect } from 'react';
// import styles from './BackToTop.module.css';

// const BackToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <button
//       className={`${styles.backToTop} ${isVisible ? styles.visible : ''}`}
//       onClick={scrollToTop}
//       aria-label="Back to top"
//     >
//       ↑
//     </button>
//   );
// };
// export default BackToTop;

// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();   
//   console.log("pathname",location.pathname)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  return null;
};

export default ScrollToTop;