import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "A large-scale multi-vendor e-commerce platform, featuring product listings, seller onboarding, cart & checkout, order management, payments, settlements, and role-based dashboards for buyers, sellers, and admins.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Razorpay",        
      ],
      githubUrl: "https://github.com/username/ecommerce-website",
      liveUrl: "https://miowns.com",
      image: "🛒",
      featured: true,
    },

    {
      id: 3,
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with 7-day forecasts, location-based services, and interactive weather maps.",
      technologies: ["React", "OpenWeather API", "Leaflet", "CSS Modules"],
      githubUrl: "https://github.com/username/weather-app",
      liveUrl: "https://weatherapp.example.com",
      image: "☁️",
      featured: false,
    },
    {
      id: 4,
      title: "Blog Platform",
      description:
        "Modern blog platform with markdown support, SEO optimization, and content management system.",
      technologies: ["Next.js", "Sanity.io", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/username/blog-platform",
      liveUrl: "https://blogplatform.example.com",
      image: "✍️",
      featured: false,
    },
    {
  id: 5,
  title: 'E-Grocery Website (Frontend)',
  description: 'A responsive frontend-only E-Grocery website designed using pure HTML and CSS. It includes homepage banners, category sections, product cards, offers, and a clean layout similar to modern online grocery platforms.',
  technologies: ['HTML', 'CSS'],
  githubUrl: 'https://github.com/username/e-grocery-frontend',
  liveUrl: 'https://blogplatform.example.com',
  image: '🥦',
  featured: true
}

  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Real-world applications built with modern technologies
          </p>
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
            <span className={styles.githubIcon}>🐱</span>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
