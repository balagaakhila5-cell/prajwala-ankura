import { useCardJoinAnimation } from '../hooks/useCardJoinAnimation';

function getCellOffset(index, columns, total) {
  const rows = Math.ceil(total / columns);
  const col = index % columns;
  const row = Math.floor(index / columns);
  const centerCol = (columns - 1) / 2;
  const centerRow = (rows - 1) / 2;
  const spread = columns === 1 ? 18 : 32;
  return {
    x: (col - centerCol) * spread,
    y: (row - centerRow) * spread,
  };
}

export default function AnimatedCardGrid({
  children,
  className = '',
  columns = 3,
  variant = 'default',
}) {
  const { ref, phase } = useCardJoinAnimation();
  const items = Array.isArray(children) ? children : [children];

  return (
    <div
      ref={ref}
      className={`animated-card-grid ${className} animated-card-grid--${variant} animated-card-grid--${phase}`}
      style={{ '--grid-cols': columns }}
      data-phase={phase}
    >
      {items.map((child, index) => {
        const { x, y } = getCellOffset(index, columns, items.length);
        return (
          <div
            key={child.key ?? index}
            className="animated-card-cell"
            style={{
              '--i': index,
              '--total': items.length,
              '--join-x': `${x}px`,
              '--join-y': `${y}px`,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
