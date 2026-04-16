'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import ContactSection from '../components/ContactSection'

export default function AstrodesignerPage() {
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
