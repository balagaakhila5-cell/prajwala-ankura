import image6 from '../assets/images/image6.jpeg';
import AnimatedCardGrid from './AnimatedCardGrid';

const values = [
  'Integrity', 'Transparency', 'Honesty', 'Professionalism', 'Simplicity', 'Future-Readiness',
];

const services = [
  'Individual Houses', 'Apartments', 'Gated Communities', 'Villas',
  'Open Plots and Lands', 'Farm Lands', 'Construction Support', 'Material Supply', 'Land Development',
];

export default function AboutUs() {
  return (
    <section id="about-us" className="about-us section section-alt">
      <div className="container">
        <div className="about-us-grid">
          <div className="about-us-text">
            <span className="section-tag">About Us</span>
            <h2>Prajwalaa Properties — 20+ Years of Excellence</h2>
            <p>
              Prajwalaa Properties is a renowned real estate company based in Hyderabad,
              committed to delivering excellence in every project. Prajwalaa Ankura in
              Ameenpur is our latest offering — 2 BHK luxury apartments with modern
              amenities and strategic connectivity.
            </p>
            <p>
              For over two decades, we have stood as a beacon of excellence in Hyderabad&apos;s
              real estate landscape, completing landmark projects including Prajwalaa Temple
              Tree, Prajwalaa Pearl, and Prajwalaa Antilia.
            </p>

            <AnimatedCardGrid className="vision-mission" columns={2} variant="compact">
              <div className="vm-card">
                <h3>Our Vision</h3>
                <p>
                  To create enduring value by developing exceptional properties that enhance
                  lifestyles, foster communities, and contribute to sustainable growth.
                </p>
              </div>
              <div className="vm-card">
                <h3>Our Mission</h3>
                <p>
                  To deliver world-class communities by embracing new technologies,
                  building long-term relationships, and becoming a brand synonymous with
                  trust, integrity, and growth.
                </p>
              </div>
            </AnimatedCardGrid>

            <div className="core-values">
              <h3>Our Core Values</h3>
              <div className="values-list">
                {values.map((v) => (
                  <span key={v} className="value-chip">{v}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-us-side">
            <img src={image6} alt="Prajwalaa Ankura apartments" className="about-us-img" />
            <AnimatedCardGrid className="stats-grid" columns={2} variant="stats">
              <div className="stat-card">
                <span className="stat-value">20+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">2000+</span>
                <span className="stat-label">Happy Families</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">145</span>
                <span className="stat-label">Units at Ankura</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">₹5,500</span>
                <span className="stat-label">Per Sq. Ft.</span>
              </div>
            </AnimatedCardGrid>
          </div>
        </div>

        <div className="services-section">
          <h3>Quality Services</h3>
          <AnimatedCardGrid className="services-grid" columns={3} variant="services">
            {services.map((s) => (
              <div key={s} className="service-item">
                <span className="service-dot" />
                {s}
              </div>
            ))}
          </AnimatedCardGrid>
        </div>
      </div>
    </section>
  );
}
