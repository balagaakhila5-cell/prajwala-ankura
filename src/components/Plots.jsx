import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';
import AnimatedCardGrid from './AnimatedCardGrid';

const plotTypes = [
  {
    title: 'Open Plots & Lands',
    desc: 'Invest in open plots and lands ideal for residential or commercial development, with strategic locations and promising growth prospects.',
    features: ['Strategic Locations', 'Growth Potential', 'Expert Guidance'],
  },
  {
    title: 'Farm Lands',
    desc: 'Embrace the tranquility of nature with scenic farm lands, perfect for agricultural pursuits or weekend getaways.',
    features: ['Scenic Surroundings', 'Agricultural Use', 'Weekend Retreats'],
  },
  {
    title: 'Gated Communities',
    desc: 'Experience safety, security, and a sense of community in meticulously planned gated communities designed for modern living.',
    features: ['Gated Security', 'Community Living', 'Modern Planning'],
  },
];

const projects = [
  {
    name: 'Prajwalaa Temple Tree',
    type: 'Gated Community',
    location: 'Near Ameenpur, Hyderabad',
    features: ['Clubhouse', 'Playground', 'Park'],
  },
  {
    name: 'Prajwalaa Pearl',
    type: 'Luxurious Apartments',
    location: 'Prime Area, Hyderabad',
    features: ['Stylish Flats', 'Quality Construction', 'Convenience'],
  },
  {
    name: 'Prajwalaa Antilia',
    type: 'Elegant Apartments',
    location: 'Sought-after Location, Hyderabad',
    features: ['Modern Living', 'Accessibility', 'Comfort'],
  },
];

export default function Plots() {
  return (
    <section id="plots" className="plots section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Plots &amp; Projects</span>
          <h2>Explore Our Offerings</h2>
          <p>
            From luxurious villas to thoughtfully designed apartments and gated communities,
            we offer a diverse range of residential options tailored to your lifestyle.
          </p>
        </div>

        <div className="plots-showcase">
          <img src={image4} alt="Prajwalaa open plots" className="plots-img" />
          <div className="plots-types">
            <AnimatedCardGrid className="plots-types-grid" columns={1} variant="plots">
              {plotTypes.map((plot) => (
                <div key={plot.title} className="plot-type-card">
                  <h3>{plot.title}</h3>
                  <p>{plot.desc}</p>
                  <div className="plot-tags">
                    {plot.features.map((f) => (
                      <span key={f} className="tag">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </AnimatedCardGrid>
          </div>
        </div>

        <h3 className="subsection-title">Our Recent Projects</h3>
        <AnimatedCardGrid className="projects-grid" columns={3} variant="projects">
          {projects.map((project) => (
            <div key={project.name} className="project-card">
              <img src={image5} alt={project.name} />
              <div className="project-info">
                <span className="project-type">{project.type}</span>
                <h4>{project.name}</h4>
                <p className="project-location">{project.location}</p>
                <div className="plot-tags">
                  {project.features.map((f) => (
                    <span key={f} className="tag">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </AnimatedCardGrid>
      </div>
    </section>
  );
}
