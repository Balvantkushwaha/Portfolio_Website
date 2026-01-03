import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "ICOESS",
      position: "Full Stack Developer",
      period: "July 2025 - Present",
      location: "India",
      description:
        "Working as a Full Stack Developer at ICOESS, responsible for end-to-end development of scalable web applications including frontend interfaces, backend APIs, and database design for e-commerce and service-based platforms.",
      achievements: [
        "Developed complete E-Grocery and e-commerce modules including frontend UI, backend business logic, and database schemas",
        "Built RESTful APIs using Node.js and Express for authentication, product management, orders, and payments",
        "Designed and optimized MongoDB schemas ensuring data integrity and performance",
        "Implemented role-based access control for buyer, seller, and admin dashboards",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
    },
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Work Experience</h2>
          <p className={styles.subtitle}>
            Professional journey & career milestones
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {index !== experiences.length - 1 && (
                  <div className={styles.markerLine}></div>
                )}
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.contentHeader}>
                  <div>
                    <h3 className={styles.company}>{exp.company}</h3>
                    <p className={styles.position}>{exp.position}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                </div>

                <p className={styles.description}>{exp.description}</p>

                <div className={styles.achievements}>
                  <h4 className={styles.achievementsTitle}>
                    Key Achievements:
                  </h4>
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>✅</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.technologies}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
