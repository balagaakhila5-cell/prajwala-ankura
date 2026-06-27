import AnimatedCardGrid from './AnimatedCardGrid';
import AnimatedHeading from './AnimatedHeading';
import AnimatedReveal from './AnimatedReveal';
import SectionMotionBackground from './SectionMotionBackground';
import { sectionBackgrounds } from '../data/sectionBackgrounds';
import { projects } from '../data/plotsProjects';

const motionBg = sectionBackgrounds.projects;

export default function Projects({ hideHeader = false }) {
  return (
    <section
      id="projects"
      className={`projects section section-alt section--motion section-motion-tone-${motionBg.tone}`}
    >
      <SectionMotionBackground {...motionBg} />
      <div className="section-motion-content container">
        {!hideHeader && (
          <div className="section-header">
            <AnimatedHeading as="span" className="section-tag">Projects</AnimatedHeading>
            <AnimatedHeading as="h2">Our Recent Projects</AnimatedHeading>
            <AnimatedReveal delay={1}>
              <p>
                Landmark developments across Hyderabad — from gated communities to luxury
                apartments, each project reflects Prajwalaa Properties&apos; commitment to quality.
              </p>
            </AnimatedReveal>
          </div>
        )}

        <AnimatedReveal delay={hideHeader ? 1 : 2}>
          <AnimatedCardGrid className="projects-grid" columns={3}>
            {projects.map((project) => (
              <div key={project.name} className="project-card">
                <div className="project-card-media">
                  <img src={project.image} alt={project.alt} />
                </div>
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
        </AnimatedReveal>
      </div>
    </section>
  );
}
