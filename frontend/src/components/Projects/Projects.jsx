import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A full-featured dashboard for managing online stores with real-time analytics, inventory management, and customer insights.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Chart.js'],
      githubUrl: 'https://github.com/username/ecommerce-dashboard',
      liveUrl: 'https://ecommerce-demo.example.com',
      image: '📊',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with drag-drop functionality, real-time updates, and team collaboration features.',
      technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS', 'DnD Kit'],
      githubUrl: 'https://github.com/username/task-manager',
      liveUrl: 'https://taskmanager.example.com',
      image: '✅',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with 7-day forecasts, location-based services, and interactive weather maps.',
      technologies: ['React', 'OpenWeather API', 'Leaflet', 'CSS Modules'],
      githubUrl: 'https://github.com/username/weather-app',
      liveUrl: 'https://weatherapp.example.com',
      image: '☁️',
      featured: false
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Modern blog platform with markdown support, SEO optimization, and content management system.',
      technologies: ['Next.js', 'Sanity.io', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/username/blog-platform',
      liveUrl: 'https://blogplatform.example.com',
      image: '✍️',
      featured: false
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>Real-world applications built with modern technologies</p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Want to see more projects?</p>
          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            <span className={styles.githubIcon}>🐙</span>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;