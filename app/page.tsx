'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Sidebar from './components/Sidebar'
import ContactSection from './components/ContactSection'
import MusicPlayer from './components/MusicPlayer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen">
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-label">Welcome to the Collective</div>
          <h1>
            <span>Where Art Meets</span>
            <span className="accent">Innovation</span>
          </h1>
          <p className="hero-description">
            A multi-disciplinary creative hub where music, design, and cinema converge. 
            Explore the different personas of Kenjih and discover a world of artistic expression.
          </p>
          <div className="hero-cta">
            <Link href="/kenjih" className="btn btn-primary">
              Explore Portfolio
            </Link>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </button>
          </div>
        </section>

        {/* Persona Grid */}
        <div className="persona-grid">
          <Link href="/kenjih" className="persona-card">
            <div className="persona-card-bg" style={{ background: 'linear-gradient(135deg, #1a0a2e, #2d1b4e)' }}></div>
            <div className="persona-card-overlay"></div>
            <div className="persona-card-content">
              <span className="persona-badge music">Music</span>
              <h3>Kenjih</h3>
              <p>Electronic Music Producer & Sound Designer</p>
            </div>
            <div className="persona-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </Link>

          <Link href="/astrodesigner" className="persona-card">
            <div className="persona-card-bg" style={{ background: 'linear-gradient(135deg, #0a1a2e, #1a2d4e)' }}></div>
            <div className="persona-card-overlay"></div>
            <div className="persona-card-content">
              <span className="persona-badge design">Design Lab</span>
              <h3>Astrodesigner</h3>
              <p>UI/UX Design & Visual Development</p>
            </div>
            <div className="persona-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </Link>

          <Link href="/visualumin" className="persona-card">
            <div className="persona-card-bg" style={{ background: 'linear-gradient(135deg, #2e0a0a, #4e1b1b)' }}></div>
            <div className="persona-card-overlay"></div>
            <div className="persona-card-content">
              <span className="persona-badge film">Cinema</span>
              <h3>Visualumin</h3>
              <p>Filmmaking & Visual Storytelling</p>
            </div>
            <div className="persona-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </Link>

          <div className="persona-card">
            <div className="persona-card-bg" style={{ background: 'linear-gradient(135deg, #2e2a0a, #4e4a1b)' }}></div>
            <div className="persona-card-overlay"></div>
            <div className="persona-card-content">
              <span className="persona-badge personal">Personal</span>
              <h3>Keith</h3>
              <p>The Curator Behind the Collective</p>
            </div>
            <div className="persona-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </div>
        </div>

        <ContactSection />
      </main>

      <MusicPlayer />

      <div className="floating-contact">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>
    </div>
  )
}
