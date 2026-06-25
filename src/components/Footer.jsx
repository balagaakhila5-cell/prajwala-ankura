export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="navbar-logo">
            <span className="logo-main">Prajwalaa</span>
            <span className="logo-sub">Ankura</span>
          </div>
          <p>
            Prajwalaa Properties — Hyderabad&apos;s trusted real estate partner with
            20+ years of excellence in delivering quality homes and communities.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#amenities">Amenities</a>
          <a href="#plots">Plots</a>
          <a href="#about-us">About Us</a>
          <a href="#price">Price</a>
          <a href="#location">Location</a>
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
          <a href="#enquire" className="footer-cta">Enquire Now</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Prajwalaa Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
