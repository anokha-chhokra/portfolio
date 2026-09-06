import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SystemSection from './components/SystemSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from '../../../arbaj-portfolio/src/components/EducationSection'
import ProjectSection from './components/ProjectSection'

export default function App(){
  return <>
      <ScrollProgress />
      <Navbar />
      <main id='top'>
        <Hero />
        <AboutSection />
        <SystemSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectSection />
      </main>
      <Footer />
  </>;
}