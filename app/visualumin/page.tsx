'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import ContactSection from '../components/ContactSection'

export default function VisualuminPage() {
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

  return (
    <div className="min-h-screen">
      <Sidebar />

      <main className="main-content">
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

        {/* Navigation to other personas */}
        <div className="section">
          <div className="section-header">
            <h3 className="section-title">Explore Other Personas</h3>
          </div>
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
          </div>
        </div>

        <ContactSection />
      </main>

      <div className="floating-contact">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>
    </div>
  )
}
