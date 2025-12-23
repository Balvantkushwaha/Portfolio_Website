import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Tech Innovations Inc.',
      position: 'Senior Software Engineer',
      period: '2021 - Present',
      location: 'San Francisco, CA',
      description: 'Led development of cloud-native applications, improved system performance by 40%, mentored 3 junior developers.',
      achievements: [
        'Architected microservices handling 1M+ daily requests',
        'Reduced API response time from 2s to 200ms',
        'Implemented CI/CD pipeline reducing deployment time by 70%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 2,
      company: 'Digital Solutions LLC',
      position: 'Full Stack Developer',
      period: '2019 - 2021',
      location: 'Remote',
      description: 'Developed full-stack applications for various clients, focusing on e-commerce and SaaS platforms.',
      achievements: [
        'Built scalable e-commerce platform serving 50K+ users',
        'Integrated payment gateways increasing conversion by 25%',
        'Developed real-time chat system with WebSocket'
      ],
      technologies: ['JavaScript', 'Python', 'MongoDB', 'Express', 'Socket.io']
    },
    {
      id: 3,
      company: 'Startup Co.',
      position: 'Junior Developer',
      period: '2018 - 2019',
      location: 'New York, NY',
      description: 'Contributed to frontend development, implemented new features, and participated in code reviews.',
      achievements: [
        'Built responsive UI components used across platform',
        'Reduced bundle size by 30% through code splitting',
        'Implemented automated testing increasing coverage to 85%'
      ],
      technologies: ['React', 'Redux', 'Jest', 'Webpack']
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Work Experience</h2>
          <p className={styles.subtitle}>Professional journey & career milestones</p>
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
                  <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
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
                    <span key={tech} className={styles.techTag}>{tech}</span>
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