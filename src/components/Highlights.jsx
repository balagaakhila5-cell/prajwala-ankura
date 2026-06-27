import AnimatedHeading from './AnimatedHeading';
import AnimatedCardGrid from './AnimatedCardGrid';
import SectionMotionBackground from './SectionMotionBackground';
import { sectionBackgrounds } from '../data/sectionBackgrounds';

const motionBg = sectionBackgrounds.highlights;

const highlights = [
  { value: '0.82', label: 'Acres Land Area' },
  { value: '145', label: 'Residential Units' },
  { value: '2 BHK', label: 'Luxury Apartments' },
  { value: 'Dec 2028', label: 'Possession From' },
];

export default function Highlights() {
  return (
    <section
      className={`highlights section--motion section-motion-tone-${motionBg.tone}`}
    >
      <SectionMotionBackground {...motionBg} />
      <div className="section-motion-content container">
        <AnimatedHeading as="h2" className="section-label">Project Highlights</AnimatedHeading>
        <AnimatedCardGrid className="highlights-grid" columns={4}>
          {highlights.map((item) => (
            <div key={item.label} className="highlight-card">
              <span className="highlight-value">{item.value}</span>
              <span className="highlight-label">{item.label}</span>
            </div>
          ))}
        </AnimatedCardGrid>
      </div>
    </section>
  );
}
