'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import ContactSection from '../components/ContactSection'
import MusicPlayer from '../components/MusicPlayer'

export default function KenjihPage() {
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

        {/* Navigation to other personas */}
        <div className="section">
          <div className="section-header">
            <h3 className="section-title">Explore Other Personas</h3>
          </div>
          <div className="persona-grid">
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </Link>
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
