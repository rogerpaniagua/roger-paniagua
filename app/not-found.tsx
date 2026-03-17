import Navbar from './Navbar'

export default function NotFound() {
  return (
    <>
      <Navbar logoHref="/" anchorPrefix="/" />

      <div style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '480px' }}>
          <p style={{
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '24px',
          }}>404</p>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: '700',
            letterSpacing: '-.03em',
            lineHeight: '1.05',
            color: 'var(--text)',
            marginBottom: '16px',
          }}>Nothing to see here.</h1>
          <p style={{
            fontSize: '17px',
            color: 'var(--muted)',
            lineHeight: '1.8',
            marginBottom: '40px',
          }}>This page doesn&apos;t exist — but the work does.</p>
          <a href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--black)',
            color: '#fff',
            fontSize: '13px',
            fontWeight: '600',
            padding: '12px 24px',
            borderRadius: '100px',
            textDecoration: 'none',
          }}>← Back to home</a>
        </div>
      </div>

      <footer className="footer-light">
        <img src="/roger.svg" alt="" aria-hidden="true" className="footer-watermark-img footer-watermark-light" />
        <p className="footer-copy footer-copy--light">© 2026 Roger Paniagua. All rights reserved.</p>
      </footer>
    </>
  )
}
