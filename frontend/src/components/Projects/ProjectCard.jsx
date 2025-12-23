import React from 'react';
import styles from './Projects.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}>
      <div className={styles.projectImage}>
        <div className={styles.imagePlaceholder}>
          {project.image}
        </div>
      </div>
      
      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          {project.featured && (
            <span className={styles.featuredBadge}>Featured</span>
          )}
        </div>
        
        <p className={styles.projectDescription}>{project.description}</p>
        
        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        
        <div className={styles.projectLinks}>
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            <span className={styles.linkIcon}>👨‍💻</span>
            Code
          </a>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkButton} ${styles.liveButton}`}
            >
              <span className={styles.linkIcon}>🚀</span>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;