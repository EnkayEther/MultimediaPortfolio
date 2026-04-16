export default function ContactSection() {
  return (
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
  )
}
