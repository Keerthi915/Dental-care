import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EmergencyCall from './components/EmergencyCall'
import DoctorProfile from './components/DoctorProfile'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <EmergencyCall />
        <Services />
        <DoctorProfile />
        <BeforeAfter />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}

export default App
