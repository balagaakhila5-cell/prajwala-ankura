import image9 from '../assets/images/image9.jpg';
import AnimatedCardGrid from './AnimatedCardGrid';
import AnimatedHeading from './AnimatedHeading';
import AnimatedFadeGroup from './AnimatedFadeGroup';
import AnimatedReveal from './AnimatedReveal';
import AboutStickyGallery from './AboutStickyGallery';
import SectionMotionBackground from './SectionMotionBackground';
import { sectionBackgrounds } from '../data/sectionBackgrounds';

const motionBg = sectionBackgrounds.about;

const values = [
  'Integrity', 'Transparency', 'Honesty', 'Professionalism', 'Simplicity', 'Future-Readiness',
];

const services = [
  'Individual Houses', 'Apartments', 'Gated Communities', 'Villas',
  'Open Plots and Lands', 'Farm Lands', 'Construction Support', 'Material Supply', 'Land Development',
];

export default function About({ hideHeader = false }) {
  return (
    <section
      id="about"
      className={`about section section--motion section-motion-tone-${motionBg.tone}`}
    >
      <SectionMotionBackground {...motionBg} />
      <div className="section-motion-content container">
        {!hideHeader && (
          <div className="section-header about-project-header">
            <AnimatedHeading as="span" className="section-tag">About</AnimatedHeading>
            <AnimatedHeading as="h2">Luxury 2 BHK Living in Ameenpur</AnimatedHeading>
          </div>
        )}

        <div className="about-grid">
          <div className="about-text">
            <AnimatedReveal className="about-text-body" delay={hideHeader ? 1 : 2}>
              <p>
                Prajwalaa Ankura, developed by Prajwalaa Properties, is located at Ameenpur,
                Hyderabad and offers a vibrant residential experience with 2 BHK flats ranging
                from 1075 to 1580 Sq. Ft. — designed for modern families seeking comfort and
                connectivity.
              </p>
              <p>
                Spread across 0.82 acres with 145 residential units, this low-density project
                offers better privacy and space. Well-connected via Old Mumbai Highway and NH 65,
                with peaceful surroundings away from city noise.
              </p>
            </AnimatedReveal>
            <AnimatedFadeGroup as="ul" className="about-features">
              <li>
                <strong>Strong Connectivity</strong>
                <span>Easy access to IT hubs, schools, and healthcare via major highways</span>
              </li>
              <li>
                <strong>Quality Construction</strong>
                <span>RCC frame structure with vitrified tiles and premium finishes</span>
              </li>
              <li>
                <strong>RERA Approved</strong>
                <span>Registered under P01100010592 &amp; P01100010719 for transparency</span>
              </li>
              <li>
                <strong>Trusted Developer</strong>
                <span>20+ years of excellence with 2000+ happy families</span>
              </li>
            </AnimatedFadeGroup>
          </div>
          <AboutStickyGallery />
        </div>

        <div id="about-company" className="about-company">
          {!hideHeader && (
            <div className="section-header">
              <AnimatedHeading as="span" className="section-tag">Our Company</AnimatedHeading>
              <AnimatedHeading as="h2">Prajwalaa Properties — 20+ Years of Excellence</AnimatedHeading>
            </div>
          )}

          <div className="about-us-grid">
            <div className="about-us-text">
              <AnimatedReveal className="about-us-copy" delay={1}>
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
              </AnimatedReveal>

              <AnimatedCardGrid className="vision-mission" columns={2}>
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

              <AnimatedReveal className="core-values" delay={2}>
                <h3>Our Core Values</h3>
                <div className="values-list">
                  {values.map((v) => (
                    <span key={v} className="value-chip">{v}</span>
                  ))}
                </div>
              </AnimatedReveal>
            </div>

            <div className="about-us-side">
              <AnimatedReveal delay={1}>
                <img src={image9} alt="Prajwalaa Ankura entrance and towers" className="about-us-img" />
              </AnimatedReveal>
              <AnimatedCardGrid className="stats-grid" columns={2}>
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

          <AnimatedReveal className="services-section" delay={1}>
            <h3>Quality Services</h3>
            <AnimatedCardGrid className="services-grid" columns={3}>
              {services.map((s) => (
                <div key={s} className="service-item">
                  <span className="service-dot" />
                  {s}
                </div>
              ))}
            </AnimatedCardGrid>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
