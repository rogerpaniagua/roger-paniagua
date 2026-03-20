'use client'

import { useState } from 'react'

const LogoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 82.9" height="28" fill="currentColor" aria-label="Roger Paniagua" role="img" style={{ display: 'block' }}>
    <path d="M0,81.7V1.2h44.5c19.8,0,31.1,8.8,31.1,24.2s-7.6,20.9-22.7,22.4v1c7.2,1.9,10,5.8,13,11.4l11.7,21.6h-20.9l-11.1-20.9c-3.2-6.2-6.2-8.3-15.6-8.3h-11.9v29.2H0ZM18,38.9h26.3c8.5,0,12.4-2.4,12.4-10.8s-3.8-10.7-12.4-10.7h-26.3v21.5Z"/>
    <path d="M80.1,41.5C80.1,16.3,96.7,0,123.4,0s43.7,16.3,43.7,41.5-16.5,41.5-43.7,41.5-43.3-16.3-43.3-41.5ZM147.9,41.5c0-17.9-6.8-24.2-24.5-24.2s-24.2,6.2-24.2,24.2,6.5,24.2,24.2,24.2,24.5-6.2,24.5-24.2Z"/>
    <path d="M171.9,41.5c0-25.1,17.1-41.5,44.7-41.5s41.2,11.8,41.2,31.1v1h-20.1v-1c0-9.4-6.1-13.8-21.6-13.8s-25.1,6.2-25.1,24.2,6.6,24.2,24.3,24.2,24.2-2.9,24.6-13.1h-27.3v-13.3h45.3v42.5h-16.7v-17.3h-1c-2.8,10.6-11.2,18.5-28.6,18.5s-39.8-16.3-39.8-41.5Z"/>
    <path d="M265.5,81.7V1.2h68.1v16.2h-50.1v15.7h48.3v16.1h-48.3v16.2h50.1v16.2h-68.1Z"/>
    <path d="M340.6,81.7V1.2h44.5c19.8,0,31.1,8.8,31.1,24.2s-7.6,20.9-22.7,22.4v1c7.2,1.9,10,5.8,13,11.4l11.7,21.6h-20.9l-11.1-20.9c-3.2-6.2-6.2-8.3-15.6-8.3h-11.9v29.2h-18ZM358.7,38.9h26.3c8.5,0,12.4-2.4,12.4-10.8s-3.8-10.7-12.4-10.7h-26.3v21.5Z"/>
  </svg>
)

interface NavbarProps {
  logoHref?: string
  anchorPrefix?: string
}

export default function Navbar({ logoHref = '#', anchorPrefix = '' }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <nav>
        <a href={logoHref} className="logo">
          <LogoSVG />
        </a>
        <ul className="nav-links">
          <li><a href={`${anchorPrefix}#approach`}>About</a></li>
          <li><a href="/work">Case Studies</a></li>
          <li><a href={`${anchorPrefix}#experience`}>Experience</a></li>
          <li><a href={`${anchorPrefix}#credentials`}>Credentials</a></li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ width: '1px', height: '14px', background: 'rgba(237,234,227,0.1)', display: 'block' }} />
            <a href="/brand" style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(237,234,227,0.25)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              ROGER® Brand Repository
            </a>
          </li>
          <li><a href={`${anchorPrefix}#contact`} className="nav-cta">Say hello →</a></li>
        </ul>
        <button
          className="nav-hamburger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? ' mobile-menu--open' : ''}`} aria-hidden={!open} inert={!open ? true : undefined}>
        <div className="mobile-menu-header">
          <a href={logoHref} className="logo" onClick={close}>
            <LogoSVG />
          </a>
          <button className="mobile-menu-close" onClick={close} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li><a href={`${anchorPrefix}#approach`} onClick={close}>About</a></li>
          <li><a href="/work" onClick={close}>Case Studies</a></li>
          <li><a href={`${anchorPrefix}#experience`} onClick={close}>Experience</a></li>
          <li><a href={`${anchorPrefix}#credentials`} onClick={close}>Credentials</a></li>
          <li style={{ borderBottom: 'none', paddingTop: '8px' }}>
            <a href="/brand" onClick={close} style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(237,234,227,0.2)', padding: '12px 0', display: 'block', textDecoration: 'none' }}>
              ROGER® Brand Repository
            </a>
          </li>
        </ul>
        <div className="mobile-menu-cta">
          <a href={`${anchorPrefix}#contact`} className="nav-cta mobile-cta" onClick={close}>Say hello →</a>
        </div>
      </div>

      {/* Backdrop */}
      {open && <div className="mobile-menu-backdrop" onClick={close} />}
    </>
  )
}
