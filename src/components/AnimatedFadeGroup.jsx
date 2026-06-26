import { Children, cloneElement, isValidElement } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AnimatedFadeGroup({
  children,
  className = '',
  as: Tag = 'div',
  itemClassName = 'fade-up-item',
}) {
  const { ref, isVisible } = useScrollReveal();
  const items = Children.toArray(children);

  return (
    <Tag
      ref={ref}
      className={`fade-up-group ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {items.map((child, index) => {
        if (!isValidElement(child)) return child;

        const existingClass = child.props.className ?? '';
        return cloneElement(child, {
          key: child.key ?? index,
          className: `${itemClassName} ${existingClass}`.trim(),
          style: {
            ...child.props.style,
            '--stagger-index': index,
          },
        });
      })}
    </Tag>
  );
}
