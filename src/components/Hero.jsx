import heroImage from '../assets/images/image2.jpeg';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Prajwalaa Ankura — luxury apartments in Ameenpur">
      <div className="hero-media">
        <img
          src={heroImage}
          alt="Prajwalaa Ankura building entrance with gate signage"
          className="hero-bg"
        />
      </div>

      <div className="hero-overlay" />
      <div className="hero-sign-spotlight" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-tag">New Launch · Ameenpur, Hyderabad</p>
        <p className="hero-desc">
          Luxury 2 BHK apartments in Ameenpur — a blend of modern living and convenience.
          Developed by Prajwalaa Properties with 20+ years of trusted excellence.
        </p>
        <div className="hero-actions">
          <a href="#enquire" className="btn btn-primary">Enquire Now</a>
          <a href="#price" className="btn btn-outline">View Price</a>
        </div>
        <p className="hero-badge">₹ 59.13 Lac onwards · RERA Approved</p>
      </div>
    </section>
  );
}
