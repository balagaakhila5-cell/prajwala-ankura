import { Link } from 'react-router-dom';
import AnimatedFadeGroup from './AnimatedFadeGroup';
import AnimatedReveal from './AnimatedReveal';

export default function Footer() {
  return (
    <footer className="footer">
      <AnimatedFadeGroup className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="navbar-logo footer-logo">
            <span className="logo-main">Prajwalaa</span>
            <span className="logo-sub">Ankura</span>
          </Link>
          <p>
            Prajwalaa Properties — Hyderabad&apos;s trusted real estate partner with
            20+ years of excellence in delivering quality homes and communities.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/amenities">Amenities</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/plots">Plots</Link>
          <Link to="/price">Price</Link>
          <Link to="/location">Location</Link>
        </div>

        <div className="footer-links">
          <h4>Our Projects</h4>
          <span>Prajwalaa Temple Tree</span>
          <span>Prajwalaa Pearl</span>
          <span>Prajwalaa Antilia</span>
          <span>Prajwalaa Ankura</span>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <span>Hyderabad, Telangana</span>
          <span>Sales Enquiry</span>
          <span>Book Site Visit</span>
          <Link to="/enquire" className="footer-cta">Enquire Now</Link>
        </div>
      </AnimatedFadeGroup>
      <AnimatedReveal>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Prajwalaa Properties. All rights reserved.</p>
          </div>
        </div>
      </AnimatedReveal>
    </footer>
  );
}
