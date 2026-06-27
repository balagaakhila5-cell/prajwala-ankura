import AnimatedReveal from './AnimatedReveal';

export default function PageRelatedInfo({
  intro = [],
  highlights = [],
  variant = 'default',
}) {
  if (!intro.length && !highlights.length) return null;

  return (
    <section
      className={`page-related-info section ${variant === 'alt' ? 'section-alt' : ''} ${variant === 'compact' ? 'page-related-info--compact' : ''}`}
    >
      <div className="container">
        {intro.length > 0 && (
          <AnimatedReveal className="page-related-intro">
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </AnimatedReveal>
        )}

        {highlights.length > 0 && (
          <div className="page-info-grid">
            {highlights.map((item) => (
              <article key={item.title} className="page-info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
