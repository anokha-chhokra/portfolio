import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App(){
  return <>
      <ScrollProgress />
      <Footer />
  </>;
}