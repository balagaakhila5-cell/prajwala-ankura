import AnimatedHeading from './AnimatedHeading';
import AnimatedReveal from './AnimatedReveal';
import SectionMotionBackground from './SectionMotionBackground';
import { sectionBackgrounds } from '../data/sectionBackgrounds';

export default function PageBanner({ tag, title, description, backgroundKey, children }) {
  const background = backgroundKey ? sectionBackgrounds[backgroundKey] : null;
  const toneClass = background ? `page-banner--motion section-motion-tone-${background.tone}` : '';

  return (
    <section className={`page-banner section--motion ${toneClass}`.trim()}>
      {background && (
        <SectionMotionBackground
          {...background}
          loading={backgroundKey === 'plots' ? 'eager' : 'lazy'}
        />
      )}
      <div className="container page-banner-inner section-motion-content">
        <AnimatedHeading as="span" className="section-tag">{tag}</AnimatedHeading>
        <AnimatedHeading as="h1">{title}</AnimatedHeading>
        {description && (
          <AnimatedReveal delay={1}>
            <p className="page-banner-desc">{description}</p>
          </AnimatedReveal>
        )}
        {children}
      </div>
    </section>
  );
}
