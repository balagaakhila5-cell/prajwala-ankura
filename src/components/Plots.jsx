import image9 from '../assets/images/image9.jpg';
import image13 from '../assets/images/image13.jpg';
import image14 from '../assets/images/image14.jpg';
import projectVideo from '../assets/videos/prajwala anukura.mp4';
import { ankuraHighlights, plotTypes } from '../data/plotsProjects';
import AnimatedCardGrid from './AnimatedCardGrid';
import AnimatedFadeGroup from './AnimatedFadeGroup';
import AnimatedHeading from './AnimatedHeading';
import AnimatedReveal from './AnimatedReveal';
import SectionMotionBackground from './SectionMotionBackground';
import { sectionBackgrounds } from '../data/sectionBackgrounds';

const motionBg = sectionBackgrounds.plots;

export default function Plots({ hideHeader = false }) {
  return (
    <section
      id="plots"
      className={`plots section section--motion section-motion-tone-${motionBg.tone}`}
    >
      <SectionMotionBackground {...motionBg} loading="eager" />
      <div className="section-motion-content container">
        {!hideHeader && (
          <div className="section-header">
            <AnimatedHeading as="span" className="section-tag">Plots</AnimatedHeading>
            <AnimatedHeading as="h2">Plots &amp; Land Offerings</AnimatedHeading>
            <AnimatedReveal delay={1}>
              <p>
                Open plots, farm lands, and gated community layouts — thoughtfully planned
                with roads, greenery, and infrastructure for long-term value.
              </p>
            </AnimatedReveal>
          </div>
        )}

        <div className="plots-showcase">
          <AnimatedReveal className="plots-media" from="left" delay={hideHeader ? 1 : 2}>
            <AnimatedReveal className="plots-video-wrap" delay={1}>
              <video
                className="plots-video"
                src={projectVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={image9}
              >
                Your browser does not support the video tag.
              </video>
              <p className="plots-video-caption">Prajwalaa Ankura — project walkthrough</p>
            </AnimatedReveal>

            <AnimatedReveal className="plots-media-info" delay={2}>
              <h3>Prajwalaa Ankura — New Launch</h3>
              <p>
                Luxury 2 BHK apartments in Ameenpur with clubhouse, landscaped parks,
                and excellent connectivity via Old Mumbai Highway and NH 65.
              </p>
              <AnimatedFadeGroup as="ul" className="plots-highlight-stats">
                {ankuraHighlights.map((item) => (
                  <li key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </AnimatedFadeGroup>
              <AnimatedFadeGroup className="plots-media-thumbs">
                <figure>
                  <img src={image13} alt="Clubhouse at Prajwalaa Ankura" loading="lazy" />
                  <figcaption>Clubhouse</figcaption>
                </figure>
                <figure>
                  <img src={image14} alt="Central green park at Prajwalaa Ankura" loading="lazy" />
                  <figcaption>Green Park</figcaption>
                </figure>
              </AnimatedFadeGroup>
            </AnimatedReveal>
          </AnimatedReveal>

          <AnimatedReveal className="plots-types" from="right" delay={hideHeader ? 2 : 3}>
            <div className="plots-types-list">
              <AnimatedCardGrid className="plots-types-grid" columns={1}>
              {plotTypes.map((plot) => (
                <div key={plot.title} className="plot-type-card">
                  <img src={plot.image} alt={plot.alt} className="plot-type-card-img" />
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
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
