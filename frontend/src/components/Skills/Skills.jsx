import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: '#61DAFB' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'Next.js', level: 80, color: '#000000' },
        { name: 'HTML/CSS', level: 95, color: '#E34F26' },
        { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: '#339933' },
        { name: 'Express', level: 85, color: '#000000' },
        { name: 'Python', level: 80, color: '#3776AB' },
        { name: 'PostgreSQL', level: 82, color: '#4169E1' },
        { name: 'MongoDB', level: 78, color: '#47A248' },
      ]
    },
    {
      category: 'Tools & DevOps',
      skills: [
        { name: 'Git/GitHub', level: 90, color: '#F05032' },
        { name: 'Docker', level: 75, color: '#2496ED' },
        { name: 'AWS', level: 70, color: '#FF9900' },
        { name: 'CI/CD', level: 80, color: '#0078D7' },
        { name: 'Testing', level: 85, color: '#E4405F' },
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technical Skills</h2>
          <p className={styles.subtitle}>Full-stack development expertise across modern technologies</p>
        </div>

        <div className={styles.categories}>
          {skillCategories.map((category) => (
            <div key={category.category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill}
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.additionalSkills}>
          <h3 className={styles.additionalTitle}>Additional Skills</h3>
          <div className={styles.skillTags}>
            {['REST APIs', 'GraphQL', 'Microservices', 'Agile/Scrum', 'UX/UI Design', 'Performance Optimization', 'Security Best Practices', 'Code Review'].map((skill) => (
              <span key={skill} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;