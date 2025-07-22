import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navar from './components/Navbar'
import Hero from './components/Hero'
import Particle from './components/Particle'
import Skills from './components/Skills'
import { Experience } from './components/Experience'
import Language from './components/Language'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
//import Education from './components/Education'


function App() {
  const [count, setCount] = useState(0)
 useEffect(()=>{
  AOS.init({
    duration:1000,
  });
 }, []);
  return (
    <>
    <Particle/>
    <Navar/>
    <Hero/>
    <Skills/>
    {/* <Education/> */}
    <Experience/>
    <Language/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    </>  
  )
}

export default App