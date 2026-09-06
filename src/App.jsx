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

export default function App(){
  return <>
      <ScrollProgress />
      <Navbar />
      <main id='top'>
        <Hero />
        <AboutSection />
        <SystemSection />
      </main>
      <Footer />
  </>;
}