import './App.css'

import Navbar from './components/navbar.tsx'
import About from './components/about.tsx'

import Logo from './assets/Logo.png'

function App() {
  //Navbar customization
  let sections = ['About','Services','Location','Contact']
  let navColor = 'rgba(27, 31, 27, 0.9)';

  //About page customization
  let heroTitle = 'Your Local Lawn Care Experts';
  let heroSubTitle = 'Friendly, Reliable Service From Your Neighborhood Team.'
  let mission = `We’re a small, locally owned lawn‑care business dedicated to keeping our community looking its best. 
  Our team lives and works right here, so every yard we service feels like part of our own neighborhood. We take pride 
  in providing reliable, high‑quality care — from mowing and trimming to seasonal maintenance — with attention to 
  detail and respect for your property. At GreenEdge, we believe a well‑kept lawn brings people together and adds beauty 
  to the place we all call home. When you choose GreenEdge, you’re not just hiring a service — you’re supporting your 
  neighbors and helping our community thrive.`

  return (
    <>
      <Navbar sections={sections} logoSRC={Logo} navColor={navColor}/>
      <About heroTitle={heroTitle} heroSubTitle={heroSubTitle} mission={mission}/>
    </>
  )
}

export default App
