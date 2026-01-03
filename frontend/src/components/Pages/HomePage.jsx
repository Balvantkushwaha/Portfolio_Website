import React from 'react'
import Layout from '../Layout/Layout';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';


const HomePage = () => {
  return (
    <Layout>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Education/>
        <Contact/>
    </Layout>
  )
}

export default HomePage;