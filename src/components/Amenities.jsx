import image12 from '../assets/images/image12.jpg';
import image13 from '../assets/images/image13.jpg';
import image14 from '../assets/images/image14.jpg';
import AnimatedHeading from './AnimatedHeading';
import AnimatedReveal from './AnimatedReveal';
import AnimatedFadeGroup from './AnimatedFadeGroup';
import SectionMotionBackground from './SectionMotionBackground';
import { sectionBackgrounds } from '../data/sectionBackgrounds';

const amenityShowcase = [
  {
    src: image12,
    title: 'Kids Play Area',
    desc: 'Safe outdoor play zones with landscaped surroundings',
  },
  {
    src: image13,
    title: 'Clubhouse',
    desc: 'Premium clubhouse for recreation and community events',
  },
  {
    src: image14,
    title: 'Central Green Park',
    desc: 'Serene landscaped park with walkways and water features',
  },
];

const amenities = [
  { icon: '💪', title: 'Gymnasium', desc: 'Modern fitness facilities for an active and healthy lifestyle' },
  { icon: '🏊', title: 'Swimming Pool', desc: 'Beautifully designed pool area for relaxation and recreation' },
  { icon: '⚡', title: 'Power Backup', desc: 'Uninterrupted power supply with reliable backup systems' },
  { icon: '💧', title: '24×7 Water Supply', desc: 'Round-the-clock water availability for every household' },
  { icon: '🔒', title: '24×7 Security', desc: 'Comprehensive security with CCTV and surveillance' },
  { icon: '📹', title: 'CCTV Surveillance', desc: 'Video surveillance across key areas for your safety' },
  { icon: '🌳', title: 'Central Green Park', desc: 'Landscaped parks and open green spaces for residents' },
  { icon: '🎮', title: 'Indoor Games', desc: 'Dedicated indoor recreation and games area' },
  { icon: '🛗', title: 'Lift', desc: 'High-speed lifts for smooth vertical mobility' },
  { icon: '🎠', title: 'Kids Play Area', desc: 'Safe sand pits and play zones for children' },
  { icon: '🏃', title: 'Jogging Track', desc: 'Dedicated track for jogging and cycling enthusiasts' },
  { icon: '🧘', title: 'Yoga Areas', desc: 'Peaceful spaces for yoga, meditation, and wellness' },
];

const motionBg = sectionBackgrounds.amenities;

export default function Amenities({ hideHeader = false }) {
  return (
    <section
      id="amenities"
      className={`amenities section section-dark section--motion section-motion-tone-${motionBg.tone}`}
    >
      <SectionMotionBackground {...motionBg} />
      <div className="section-motion-content container">
        {!hideHeader && (
          <div className="section-header">
            <AnimatedHeading as="span" className="section-tag">Amenities</AnimatedHeading>
            <AnimatedHeading as="h2">360° Entertainment &amp; Convenience</AnimatedHeading>
            <AnimatedReveal delay={1}>
              <p>
                Prajwalaa Ankura offers world-class amenities designed for community living,
                with facilities for recreation, fitness, and relaxation for all age groups.
              </p>
            </AnimatedReveal>
          </div>
        )}

        <AnimatedFadeGroup className="amenities-showcase">
          {amenityShowcase.map((item) => (
            <figure key={item.title} className="amenity-showcase-card">
              <img src={item.src} alt={item.title} loading="lazy" decoding="async" />
              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </figcaption>
            </figure>
          ))}
        </AnimatedFadeGroup>

        <div className="amenities-grid amenities-grid--panel">
          {amenities.map((item) => (
            <div key={item.title} className="amenity-card">
              <span className="amenity-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
