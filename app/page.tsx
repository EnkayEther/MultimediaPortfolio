'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [fadeInElements, setFadeInElements] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFadeInElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="brand">
          <div className="brand-logo">The <span className="neon">Neon</span> Curator</div>
          <div className="brand-subtitle">Creative Collective</div>
        </div>

        <div className="nav-section">
          <div className="nav-label">Navigate</div>
          <a
            href="#home"
            className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
          >
            <span className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              </svg>
            </span>
            <span>Home</span>
          </a>
          <a
            href="#music"
            className={`nav-item ${activeSection === 'music' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('music') }}
          >
            <span className="persona-indicator music"></span>
            <span>Kenjih</span>
          </a>
          <a
            href="#design"
            className={`nav-item ${activeSection === 'design' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('design') }}
          >
            <span className="persona-indicator design"></span>
            <span>Astrodesigner</span>
          </a>
          <a
            href="#film"
            className={`nav-item ${activeSection === 'film' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('film') }}
          >
            <span className="persona-indicator film"></span>
            <span>Visualumin</span>
          </a>
        </div>

        <div className="nav-section">
          <div className="nav-label">Personas</div>
          <a
            href="#music"
            className="nav-item"
            onClick={(e) => { e.preventDefault(); scrollToSection('music') }}
          >
            <span className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18V5l12-2v13"/>
                <circle cx="6" cy="18" r="3"/>
                <circle cx="18" cy="16" r="3"/>
              </svg>
            </span>
            <span>Music</span>
          </a>
          <a
            href="#design"
            className="nav-item"
            onClick={(e) => { e.preventDefault(); scrollToSection('design') }}
          >
            <span className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
            </span>
            <span>Design Lab</span>
          </a>
          <a
            href="#film"
            className="nav-item"
            onClick={(e) => { e.preventDefault(); scrollToSection('film') }}
          >
            <span className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                <line x1="7" y1="2" x2="7" y2="22"/>
                <line x1="17" y1="2" x2="17" y2="22"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
              </svg>
            </span>
            <span>Cinema</span>
          </a>
        </div>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">K</div>
            <div className="user-info">
              <h4>Keith</h4>
              <span>Curator</span>
            </div>
          </div>
        </div>
      </nav>

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
            <button className="btn btn-primary" onClick={() => scrollToSection('music')}>
              Explore Portfolio
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </button>
          </div>
        </section>

        {/* Persona Grid */}
        <div className="persona-grid">
          <div className="persona-card fade-in" onClick={() => scrollToSection('music')}>
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
          </div>

          <div className="persona-card fade-in" onClick={() => scrollToSection('design')}>
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
          </div>

          <div className="persona-card fade-in" onClick={() => scrollToSection('film')}>
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
          </div>

          <div className="persona-card fade-in">
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

        {/* Music Section */}
        <section id="music" className="music-hero">
          <div className="music-hero-bg"></div>
          <div className="music-hero-content">
            <div className="music-artwork">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
              </svg>
            </div>
            <div className="music-info">
              <div className="verified-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Verified Artist
              </div>
              <h2 className="music-artist-name">Kenjih</h2>
              <p className="music-stats">12.4K Monthly Listeners</p>
              <div className="music-actions">
                <button className="btn-play">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  Play
                </button>
                <button className="btn-follow">Follow</button>
              </div>
            </div>
          </div>
        </section>

        <div className="music-content">
          <div className="music-grid">
            <div className="tracks-section">
              <h3>Popular Tracks</h3>
              <ul className="track-list">
                <li className="track-item">
                  <span className="track-number">01</span>
                  <div className="track-info">
                    <div className="track-title">Static Friction</div>
                    <div className="track-album">Latest Experiment</div>
                  </div>
                  <span className="track-duration">3:42</span>
                </li>
                <li className="track-item">
                  <span className="track-number">02</span>
                  <div className="track-info">
                    <div className="track-title">Neon Drift</div>
                    <div className="track-album">Midnight Sessions</div>
                  </div>
                  <span className="track-duration">4:15</span>
                </li>
                <li className="track-item">
                  <span className="track-number">03</span>
                  <div className="track-info">
                    <div className="track-title">Digital Shadows</div>
                    <div className="track-album">Synthetic Dreams</div>
                  </div>
                  <span className="track-duration">3:58</span>
                </li>
                <li className="track-item">
                  <span className="track-number">04</span>
                  <div className="track-info">
                    <div className="track-title">Pulse Code</div>
                    <div className="track-album">Binary Sunset</div>
                  </div>
                  <span className="track-duration">4:30</span>
                </li>
                <li className="track-item">
                  <span className="track-number">05</span>
                  <div className="track-info">
                    <div className="track-title">Voltage Rise</div>
                    <div className="track-album">Current Affairs</div>
                  </div>
                  <span className="track-duration">3:25</span>
                </li>
              </ul>
            </div>

            <div className="about-section">
              <h3>About the Artist</h3>
              <div className="about-card">
                <p>
                  Kenjih is an electronic music producer and sound designer based in the digital realm. 
                  Creating atmospheric soundscapes that blend organic textures with synthetic waveforms, 
                  Kenjih explores the boundaries between human emotion and machine precision.
                </p>
                <div className="social-proof">
                  <div className="follower-avatars">
                    <div className="follower-avatar"></div>
                    <div className="follower-avatar"></div>
                    <div className="follower-avatar"></div>
                    <div className="follower-avatar"></div>
                  </div>
                  <span className="follower-count">+12K community follows</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Section */}
        <section id="design" className="design-hero">
          <div className="design-header">
            <div className="design-title-block">
              <div className="design-version">DESIGN LAB V.04</div>
              <h2>Cosmic <span>Astrodesigner</span></h2>
            </div>
          </div>

          <div className="design-stats fade-in">
            <div className="stat-card">
              <div className="stat-value" style={{ color: 'var(--accent-mint)' }}>47</div>
              <div className="stat-label">Total Experiments</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">Void.OS</div>
              <div className="stat-label">Current Project</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">Matte</div>
              <div className="stat-label">Design Language</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ color: 'var(--accent-teal)' }}>99.8%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </section>

        <div className="section" style={{ paddingTop: 0 }}>
          <div className="section-header">
            <h3 className="section-title">Recent Experiments</h3>
            <a href="#" className="section-link">
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div className="projects-grid">
            <div className="project-card featured fade-in">
              <div className="project-image" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}></div>
              <div className="project-overlay"></div>
              <div className="project-content">
                <span className="project-tag">Featured Case Study</span>
                <h3 className="project-title">Nebula Stream Identity</h3>
                <p className="project-desc">Complete brand identity for a streaming platform</p>
                <a href="#" className="project-card-cta">
                  View Case Study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image" style={{ background: 'linear-gradient(135deg, #2d1b4e, #4a2c7a)' }}></div>
              <div className="project-overlay"></div>
              <div className="project-content">
                <span className="project-tag">Interface Design</span>
                <h3 className="project-title">Violet Echoes</h3>
                <p className="project-desc">UI exploration for music app</p>
              </div>
            </div>

            <div className="project-card square fade-in">
              <div className="project-image" style={{ background: 'linear-gradient(135deg, #1a2e1a, #2e4a2e)' }}></div>
              <div className="project-overlay"></div>
              <div className="project-content">
                <span className="project-tag">Experimental</span>
                <h3 className="project-title">Void.OS</h3>
                <p className="project-desc">Design system</p>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image" style={{ background: 'linear-gradient(135deg, #2e1a1a, #4e2e2e)' }}></div>
              <div className="project-overlay"></div>
              <div className="project-content">
                <span className="project-tag">Motion</span>
                <h3 className="project-title">Liquid Mercury Phase II</h3>
                <p className="project-desc">Animation study</p>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image" style={{ background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)' }}></div>
              <div className="project-overlay"></div>
              <div className="project-content">
                <span className="project-tag">Print</span>
                <h3 className="project-title">Poster Collection</h3>
                <p className="project-desc">Physical design mockups</p>
              </div>
            </div>
          </div>
        </div>

        {/* Film Section */}
        <section id="film" className="film-hero">
          <div className="film-hero-bg"></div>
          <div className="film-content">
            <div className="film-text">
              <div className="hero-label">Visualumin Cinema</div>
              <h2>Chasing <span>Neons</span></h2>
              <p className="film-description">
                A visual journey through light, shadow, and motion. Visualumin explores 
                the art of cinematography and visual storytelling, capturing moments 
                that transcend the ordinary.
              </p>
              <div className="film-cta-group">
                <button className="btn btn-film">Watch Reel</button>
                <button className="btn btn-film-outline">Project Details</button>
              </div>
            </div>
            <div className="film-visual">
              <div className="film-orb"></div>
            </div>
          </div>
        </section>

        <div className="film-categories">
          <div className="category-tabs">
            <span className="category-tab active">Narrative Shorts</span>
            <span className="category-tab">Documentary</span>
            <span className="category-tab">Visual Studies</span>
            <span className="category-tab">Commercials</span>
          </div>

          <div className="film-grid">
            <div className="film-card fade-in">
              <div className="film-thumbnail" style={{ background: 'linear-gradient(135deg, #1a0505, #3a1010)' }}>
                <div className="film-play-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              </div>
              <div className="film-info">
                <h4 className="film-title">Echoes in Time</h4>
                <p className="film-meta">12:34 | Short Film</p>
              </div>
            </div>

            <div className="film-card fade-in">
              <div className="film-thumbnail" style={{ background: 'linear-gradient(135deg, #051a1a, #103a3a)' }}>
                <div className="film-play-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              </div>
              <div className="film-info">
                <h4 className="film-title">Urban Solitude</h4>
                <p className="film-meta">8:45 | Documentary</p>
              </div>
            </div>

            <div className="film-card fade-in">
              <div className="film-thumbnail" style={{ background: 'linear-gradient(135deg, #1a1a05, #3a3a10)' }}>
                <div className="film-play-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              </div>
              <div className="film-info">
                <h4 className="film-title">Color Studies</h4>
                <p className="film-meta">4:20 | Visual Study</p>
              </div>
            </div>
          </div>

          <div className="section-header" style={{ marginTop: '3rem' }}>
            <h3 className="section-title">Visual Studies</h3>
          </div>

          <div className="film-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="film-card fade-in" style={{ gridColumn: 'span 2' }}>
              <div className="film-thumbnail" style={{ background: 'linear-gradient(135deg, #2e1a3a, #4e2e5a)', aspectRatio: '21/9' }}>
                <div className="film-play-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              </div>
              <div className="film-info">
                <h4 className="film-title">Mono-Chrome Series</h4>
                <p className="film-meta">Visual Exploration</p>
              </div>
            </div>

            <div className="film-card fade-in">
              <div className="film-thumbnail" style={{ background: 'linear-gradient(135deg, #1a2e3a, #2e4e5a)' }}>
                <div className="film-play-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              </div>
              <div className="film-info">
                <h4 className="film-title">Macro</h4>
                <p className="film-meta">Texture Study</p>
              </div>
            </div>

            <div className="film-card fade-in">
              <div className="film-thumbnail" style={{ background: 'linear-gradient(135deg, #3a1a2e, #5a2e4e)' }}>
                <div className="film-play-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              </div>
              <div className="film-info">
                <h4 className="film-title">Light Play</h4>
                <p className="film-meta">Experimental</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2 className="contact-title">Leave a Light On</h2>
          <p className="contact-subtitle">Interested in collaboration? Let's create something extraordinary.</p>
          <a href="mailto:contact@neoncurator.com" className="btn btn-primary">Get in Touch</a>

          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Vimeo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 7.42c-.09 1.96-1.46 4.62-4.1 7.98C15.1 18.5 12.37 20 9.8 20c-1.47 0-2.73-.68-3.77-2.04C5.07 16.4 4.18 14.8 4.09 12.6c-.03-.55-.03-1.32-.03-2.3 0-.9.05-1.92.16-3.06.14-1.57.6-2.95 1.4-4.15C6.56 1.87 7.72 1.1 9.2 1c1.06-.1 1.97.12 2.73.67 1.06.8 1.79 1.9 2.2 3.3.42 1.23.63 2.53.63 3.9 0 .88-.08 1.62-.25 2.2-.17.58-.52 1.2-1.05 1.84-.53.65-1.15 1.22-1.85 1.71-.7.5-1.15.8-1.35.92-.7.4-1.4.6-2.1.6-.57 0-1.18-.24-1.8-.73-.63-.48-1.17-1.18-1.62-2.08l-.73-1.46c-.11-.28-.27-.61-.49-.98-.22-.37-.43-.7-.65-.98-.22-.28-.42-.52-.6-.72-.18-.2-.31-.3-.38-.3-.12 0-.28.06-.48.17-.2.11-.42.28-.67.5-.25.22-.52.5-.81.84-.3.34-.6.74-.92 1.2-.44.7-.82 1.38-1.13 2.05-.31.67-.46 1.23-.46 1.68 0 .87.3 1.55.88 2.04.58.49 1.28.73 2.1.73.83 0 1.67-.27 2.5-.8.83-.53 1.48-1.11 1.95-1.72.27-.33.5-.65.7-.95.2-.3.32-.54.35-.72.03-.1.05-.2.05-.3 0-.36-.2-.74-.6-1.15-.4-.4-.94-.88-1.64-1.43-.48-.4-.87-.8-1.16-1.2-.29-.4-.43-.82-.43-1.26 0-.27.07-.54.22-.8.15-.27.35-.49.58-.66.24-.18.5-.32.77-.43.28-.11.53-.18.77-.21.48-.09 1.2.07 2.16.47.96.4 1.86 1.05 2.71 1.95.85.9 1.5 2.1 1.96 3.6.43 1.47.65 3.07.65 4.8V12.6z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Behance">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.072 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953v5.984zm-3.476 0H3.48V5.021h3.176v3.787H3.478v2.202h3.23v3.964z"/>
              </svg>
            </a>
          </div>

          <p className="footer-text">The Neon Curator Collective. All personas reserved.</p>
        </section>
      </main>

      {/* Music Player */}
      <div className="music-player">
        <div className="player-track-info">
          <div className="player-album-art"></div>
          <div className="player-track-text">
            <h4>Neon Drift</h4>
            <span>Kenjih</span>
          </div>
        </div>

        <div className="player-controls">
          <div className="player-buttons">
            <button className="player-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 19 21 12 16 5"/>
                <polyline points="8 19 3 12 8 5"/>
              </svg>
            </button>
            <button className="player-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="19 20 9 12 19 4 19 20"/>
                <line x1="5" y1="19" x2="5" y2="5"/>
              </svg>
            </button>
            <button className="player-btn play">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </button>
            <button className="player-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 4 15 12 5 20 5 4"/>
                <line x1="19" y1="5" x2="19" y2="19"/>
              </svg>
            </button>
            <button className="player-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 4 23 10 17 10"/>
                <polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
              </svg>
            </button>
          </div>
          <div className="progress-container">
            <span className="progress-time">1:28</span>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <span className="progress-time">4:15</span>
          </div>
        </div>

        <div className="player-volume">
          <button className="player-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          </button>
          <div className="volume-slider"></div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="floating-contact">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>
    </div>
  )
}