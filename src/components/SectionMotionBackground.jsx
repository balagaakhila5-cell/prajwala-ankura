import { useEffect, useRef } from 'react';

export default function SectionMotionBackground({
  src,
  overlay = 'navy',
  tone = 'dark',
  loading = 'lazy',
}) {
  const mediaRef = useRef(null);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const onScroll = () => {
      const section = media.closest('.section--motion, .page-banner--motion');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewH) return;

      const progress = (viewH - rect.top) / (viewH + rect.height);
      const offsetY = (progress - 0.5) * 48;
      media.style.setProperty('--parallax-y', `${offsetY}px`);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className={`section-motion-bg section-motion-bg--${overlay} section-motion-bg--tone-${tone}`}
      aria-hidden="true"
    >
      <div className="section-motion-bg__media" ref={mediaRef}>
        <img src={src} alt="" className="section-motion-bg__image" loading={loading} decoding="async" />
      </div>
      <div className="section-motion-bg__overlay" />
      <div className="section-motion-bg__grain" />
    </div>
  );
}
