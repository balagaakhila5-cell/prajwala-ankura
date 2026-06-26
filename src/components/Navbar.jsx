import { useEffect, useMemo, useState } from 'react';
import { recommendedSites } from '../data/locationPlaces';
import prajwalaIcon from '../assets/images/prajwala-icon-1.jpeg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Plots', href: '#plots' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Price', href: '#price' },
  { label: 'Location', href: '#location' },
  { label: 'Enquire Now', href: '#enquire', cta: true },
];

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [query, setQuery] = useState('');

  const closeAll = () => {
    setSearchOpen(false);
    setDrawerOpen(false);
  };

  const handleNav = (href) => {
    closeAll();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSiteSelect = (site) => {
    closeAll();
    setQuery('');
    if (site.categoryId && site.place) {
      window.dispatchEvent(new CustomEvent('select-location', {
        detail: { place: site.place, categoryId: site.categoryId },
      }));
    }
    document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredSites = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return recommendedSites;
    return recommendedSites.filter((site) =>
      `${site.title} ${site.subtitle} ${site.meta}`.toLowerCase().includes(term));
  }, [query]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeAll();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = searchOpen || drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [searchOpen, drawerOpen]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a
          href="#home"
          className="navbar-logo"
          aria-label="Prajwalaa Ankura — Home"
          onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
        >
          <img
            src={prajwalaIcon}
            alt=""
            className="navbar-logo-icon"
            aria-hidden="true"
          />
          <span className="navbar-logo-text">
            <span className="logo-main">Prajwalaa</span>
            <span className="logo-sub">Ankura</span>
          </span>
        </a>

        <div className="nav-actions">
          <button
            type="button"
            className={`nav-icon-btn ${searchOpen ? 'active' : ''}`}
            aria-label="Search locations"
            aria-expanded={searchOpen}
            onClick={() => {
              setDrawerOpen(false);
              setSearchOpen((open) => !open);
            }}
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            className={`nav-icon-btn nav-menu-btn ${drawerOpen ? 'active' : ''}`}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => {
              setSearchOpen(false);
              setDrawerOpen((open) => !open);
            }}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <div className={`nav-search-panel ${searchOpen ? 'open' : ''}`} role="dialog" aria-label="Search nearby locations">
        <div className="nav-search-panel__inner container">
          <div className="nav-search-field">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search schools, hospitals, temples, malls..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus={searchOpen}
            />
            {query && (
              <button
                type="button"
                className="nav-search-clear"
                aria-label="Clear search"
                onClick={() => setQuery('')}
              >
                <CloseIcon />
              </button>
            )}
          </div>

          <p className="nav-search-label">Recommended near Prajwalaa Ankura</p>

          <div className="nav-search-grid">
            {filteredSites.length > 0 ? (
              filteredSites.map((site) => (
                <button
                  key={`${site.title}-${site.subtitle}`}
                  type="button"
                  className="nav-search-item"
                  onClick={() => handleSiteSelect(site)}
                >
                  <strong>{site.title}</strong>
                  <span>{site.subtitle}</span>
                  <em>{site.meta}</em>
                </button>
              ))
            ) : (
              <p className="nav-search-empty">No matching locations found.</p>
            )}
          </div>
        </div>
      </div>

      <div
        className={`nav-overlay ${searchOpen || drawerOpen ? 'visible' : ''}`}
        onClick={closeAll}
        aria-hidden="true"
      />

      <aside
        className={`nav-drawer ${drawerOpen ? 'open' : ''}`}
        aria-label="Site navigation"
        aria-hidden={!drawerOpen}
      >
        <button type="button" className="nav-drawer-close" onClick={closeAll}>
          <CloseIcon />
          <span>Close</span>
        </button>

        <nav className="nav-drawer-links">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-drawer-link ${link.cta ? 'nav-drawer-link--cta' : ''}`}
              style={{ '--i': index }}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  );
}
