import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      institution: 'Oriental Institute of Science & Technology, Bhopal',
      period: '2025 - Present',
      location: 'Bhopal, MP, India',
      gpa: 'N/A',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Neural Networks for Computer Vision".',
      courses: [
        'Advanced Algorithms',
        'Machine Learning',
        'Computer Vision',
        'Distributed Systems',
        'Cloud Computing'
      ],
      achievements: [
        'Graduated with Distinction',
        'Published research paper in IEEE Conference',
        'Teaching Assistant for Data Structures course'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Science (B.Sc) in Computer Science',
      institution: 'Maharaja Chhatrasal Bundelkhand University, Chhatarpur',
      period: '2022 - 2025',
      location: 'Chhatarpur, MP, India',
      gpa: '6.9/10',
      description: 'Focused on Software Engineering and Web Technologies. President of Coding Club.',
      courses: [
        'Data Structures',
        'Operating Systems',
        'Database Systems',
        'Web Development',
        'Software Engineering'
      ],
      achievements: [
        'Dean\'s List all semesters',
        'Winner of University Hackathon 2015',
        'Led team to develop campus navigation app'
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2022',
      credentialId: 'AWS-12345'
    },
    {
      id: 2,
      name: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: '2021',
      credentialId: 'GCP-67890'
    },
    {
      id: 3,
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2020',
      credentialId: 'REACT-45678'
    }
    
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Education & Certifications</h2>
          <p className={styles.subtitle}>Academic background and professional certifications</p>
        </div>

        <div className={styles.educationContent}>
          <div className={styles.degrees}>
            <h3 className={styles.sectionTitle}>Degrees</h3>
            <div className={styles.degreesList}>
              {educationData.map((edu) => (
                <div key={edu.id} className={styles.degreeCard}>
                  <div className={styles.degreeHeader}>
                    <div>
                      <h4 className={styles.degree}>{edu.degree}</h4>
                      <p className={styles.institution}>{edu.institution}</p>
                    </div>
                    <div className={styles.degreeMeta}>
                      <span className={styles.period}>{edu.period}</span>
                      <span className={styles.gpa}>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  
                  <div className={styles.degreeDetails}>
                    <p className={styles.location}>{edu.location}</p>
                    <p className={styles.description}>{edu.description}</p>
                    
                    <div className={styles.courses}>
                      <h5 className={styles.coursesTitle}>Relevant Courses:</h5>
                      <div className={styles.courseTags}>
                        {edu.courses.map((course) => (
                          <span key={course} className={styles.courseTag}>{course}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.achievements}>
                      <h5 className={styles.achievementsTitle}>Achievements:</h5>
                      <ul className={styles.achievementsList}>
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className={styles.achievementItem}>
                            <span className={styles.achievementIcon}>🏆</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.certifications}>
            <h3 className={styles.sectionTitle}>Certifications</h3>
            <div className={styles.certGrid}>
              {certifications.map((cert) => (
                <div key={cert.id} className={styles.certCard}>
                  <div className={styles.certIcon}>📜</div>
                  <div className={styles.certContent}>
                    <h4 className={styles.certName}>{cert.name}</h4>
                    <p className={styles.certIssuer}>{cert.issuer}</p>
                    <div className={styles.certMeta}>
                      <span className={styles.certDate}>{cert.date}</span>
                      <span className={styles.certId}>ID: {cert.credentialId}</span>
                    </div>
                  </div>
                  <a 
                    href="#"
                    className={styles.verifyButton}
                    onClick={(e) => {
                      e.preventDefault();
                      // Add verification logic here
                      alert(`Verify ${cert.name} certificate`);
                    }}
                  >
                    Verify
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;