import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Plots', href: '#plots' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Price', href: '#price' },
  { label: 'Location', href: '#location' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleNav('#home'); }}>
          <span className="logo-main">Prajwalaa</span>
          <span className="logo-sub">Ankura</span>
        </a>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
            >
              {link.label}
            </a>
          ))}
          <a href="#enquire" className="nav-cta" onClick={(e) => { e.preventDefault(); handleNav('#enquire'); }}>
            Enquire Now
          </a>
        </nav>
      </div>
    </header>
  );
}
