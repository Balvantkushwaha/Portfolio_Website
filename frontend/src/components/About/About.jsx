import React from "react";
import styles from "./About.module.css";
import profileImage from '../../assets/images/profile3.jpg';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            Computer Science Student & Aspiring Developer
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a passionate software engineer with 1+ years of experience
              building scalable web applications. I specialize in React,
              Node.js, and cloud technologies, with a strong focus on creating
              efficient, maintainable code and exceptional user experiences. I
              thrive on solving complex problems and continuously learning new
              technologies to stay at the forefront of web development.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Projects Built</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>Hackathons</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>GitHub Contributions</span>
              </div>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              {/* Add student image */}
              <div className={styles.studentImage}>
                {/* <span>🎓</span> */}
                <img
                  src={profileImage}   // 👉 put your image path here
                  alt="Student"
                  className={styles.studentImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
