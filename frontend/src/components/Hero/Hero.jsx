import React from 'react';
import styles from './Hero.module.css';
import profileImage from '../../assets/images/profile1.jpeg';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Balvant Kushwaha</span>
          </h1>
          <h2 className={styles.subtitle}>Software Engineer</h2>
          <p className={styles.description}>
            I build scalable web applications with clean code and modern technologies.
            Passionate about solving complex problems and creating impactful digital experiences.
          </p>
          <div className={styles.ctaButtons}>
            <a href="#projects" className={styles.primaryButton}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Get In Touch
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {/* <div className={styles.profileImage}>        
            <div className={styles.imagePlaceholder}>
              <span>👨‍💻</span>
            </div>
          </div> */}
           <div className={styles.profileImage}>
            <img 
              src={profileImage} 
              alt="Your Name - Software Engineer"
              className={styles.profileImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



// import React, { useState, useEffect, useRef } from 'react';
// import styles from './Hero.module.css';

// // Import your images
// import profileImage1 from '../../assets/images/profile1.jpeg';
// import profileImage2 from '../../assets/images/profile2.jpg';
// import profileImage3 from '../../assets/images/profile3.jpg';
// import profileImage4 from '../../assets/images/profile4.jpg';

// const Hero = () => {
//   const images = [
//     { src: profileImage1, alt: "Coding at work", title: "Developer Life" },
//     { src: profileImage2, alt: "Team collaboration", title: "Team Work" },
//     { src: profileImage3, alt: "Project presentation", title: "Presentations" },
//     { src: profileImage4, alt: "Conference speaking", title: "Public Speaking" }
//   ];

//   const [rotation, setRotation] = useState(0);
//   const [autoRotate, setAutoRotate] = useState(true);
//   const cubeRef = useRef(null);

//   // Auto rotation effect
//   useEffect(() => {
//     if (!autoRotate) return;
    
//     const interval = setInterval(() => {
//       setRotation(prev => (prev + 0.5) % 360);
//     }, 50);
    
//     return () => clearInterval(interval);
//   }, [autoRotate]);

//   const handleFaceClick = (faceIndex) => {
//     setAutoRotate(false);
//     setRotation(faceIndex * 90);
//     setTimeout(() => setAutoRotate(true), 3000);
//   };

//   return (
//     <section id="hero" className={styles.hero}>
//       <div className={styles.container}>
//         <div className={styles.content}>
//           <h1 className={styles.title}>
//             Hi, I'm <span className={styles.highlight}>Alex Johnson</span>
//           </h1>
//           <h2 className={styles.subtitle}>Senior Software Engineer</h2>
//           <p className={styles.description}>
//             I build scalable web applications with clean code and modern technologies.
//             Passionate about solving complex problems and creating impactful digital experiences.
//           </p>
//           <div className={styles.ctaButtons}>
//             <a href="#projects" className={styles.primaryButton}>
//               View My Work
//             </a>
//             <a href="#contact" className={styles.secondaryButton}>
//               Get In Touch
//             </a>
//           </div>
//         </div>
        
//         <div className={styles.imageContainer}>
//           <div className={styles.cubeScene}>
//             <div 
//               className={styles.cube}
//               ref={cubeRef}
//               style={{ transform: `rotateY(${rotation}deg)` }}
//             >
//               {images.map((image, index) => (
//                 <div
//                   key={index}
//                   className={`${styles.cubeFace} ${styles[`face${index + 1}`]}`}
//                   onClick={() => handleFaceClick(index)}
//                 >
//                   <div className={styles.faceContent}>
//                     <img 
//                       src={image.src} 
//                       alt={image.alt}
//                       className={styles.cubeImage}
//                     />
//                     <div className={styles.faceOverlay}>
//                       <h3 className={styles.faceTitle}>{image.title}</h3>
//                       <p className={styles.faceText}>{image.alt}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Controls */}
//             <div className={styles.cubeControls}>
//               <button 
//                 className={styles.controlButton}
//                 onClick={() => setRotation(prev => prev - 90)}
//               >
//                 ← 
//               </button>
//               <button 
//                 className={styles.controlButton}
//                 onClick={() => setAutoRotate(!autoRotate)}
//               >
//                 {autoRotate ? '⏸️ ' : '▶️ '}
//               </button>
//               <button 
//                 className={styles.controlButton}
//                 onClick={() => setRotation(prev => prev + 90)}
//               >
//                  →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




