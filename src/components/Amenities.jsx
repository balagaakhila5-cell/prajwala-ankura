import AnimatedCardGrid from './AnimatedCardGrid';

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

export default function Amenities() {
  return (
    <section id="amenities" className="amenities section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Amenities</span>
          <h2>360° Entertainment &amp; Convenience</h2>
          <p>
            Prajwalaa Ankura offers world-class amenities designed for community living,
            with facilities for recreation, fitness, and relaxation for all age groups.
          </p>
        </div>
        <AnimatedCardGrid className="amenities-grid" columns={3} variant="amenities">
          {amenities.map((item) => (
            <div key={item.title} className="amenity-card">
              <span className="amenity-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </AnimatedCardGrid>
      </div>
    </section>
  );
}
