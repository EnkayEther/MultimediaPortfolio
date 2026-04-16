'use client'

export default function MusicPlayer() {
  return (
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
  )
}
