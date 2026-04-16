'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const getActiveState = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <nav className="sidebar">
      <div className="brand">
        <Link href="/" className="brand-link">
          <div className="brand-logo">The <span className="neon">Neon</span> Curator</div>
          <div className="brand-subtitle">Creative Collective</div>
        </Link>
      </div>

      <div className="nav-section">
        <div className="nav-label">Navigate</div>
        <Link
          href="/"
          className={`nav-item ${getActiveState('/') ? 'active' : ''}`}
        >
          <span className="nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            </svg>
          </span>
          <span>Home</span>
        </Link>
        <Link
          href="/kenjih"
          className={`nav-item ${getActiveState('/kenjih') ? 'active' : ''}`}
        >
          <span className="persona-indicator music"></span>
          <span>Kenjih</span>
        </Link>
        <Link
          href="/astrodesigner"
          className={`nav-item ${getActiveState('/astrodesigner') ? 'active' : ''}`}
        >
          <span className="persona-indicator design"></span>
          <span>Astrodesigner</span>
        </Link>
        <Link
          href="/visualumin"
          className={`nav-item ${getActiveState('/visualumin') ? 'active' : ''}`}
        >
          <span className="persona-indicator film"></span>
          <span>Visualumin</span>
        </Link>
      </div>

      <div className="nav-section">
        <div className="nav-label">Personas</div>
        <Link href="/kenjih" className="nav-item">
          <span className="nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18V5l12-2v13"/>
              <circle cx="6" cy="18" r="3"/>
              <circle cx="18" cy="16" r="3"/>
            </svg>
          </span>
          <span>Music</span>
        </Link>
        <Link href="/astrodesigner" className="nav-item">
          <span className="nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/>
              <polyline points="2 17 12 22 22 17"/>
              <polyline points="2 12 12 17 22 12"/>
            </svg>
          </span>
          <span>Design Lab</span>
        </Link>
        <Link href="/visualumin" className="nav-item">
          <span className="nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
              <line x1="7" y1="2" x2="7" y2="22"/>
              <line x1="17" y1="2" x2="17" y2="22"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
            </svg>
          </span>
          <span>Cinema</span>
        </Link>
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
  )
}
