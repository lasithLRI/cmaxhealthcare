import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import IconsSection from './components/IconsSection'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'



function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <IconsSection></IconsSection>
      <AboutSection></AboutSection>
      <FeaturedProducts></FeaturedProducts>
      <Footer></Footer>
    </>
    
  )
}

export default App
