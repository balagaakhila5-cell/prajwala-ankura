import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AnimatedReveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  from = 'up',
}) {
  const { ref, isVisible } = useScrollReveal();
  const fromClass = from === 'left'
    ? 'fade-up-reveal--from-left'
    : from === 'right'
      ? 'fade-up-reveal--from-right'
      : '';

  return (
    <Tag
      ref={ref}
      className={`fade-up-reveal ${fromClass} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--stagger-index': delay }}
    >
      {children}
    </Tag>
  );
}
