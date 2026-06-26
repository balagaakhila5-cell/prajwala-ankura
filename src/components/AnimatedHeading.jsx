import { useScrollReveal } from '../hooks/useScrollReveal';

function splitWords(text) {
  const words = text.trim().split(/\s+/);
  let charIndex = 0;

  return words.map((word, wordIndex) => {
    const chars = [...word].map((char) => {
      const index = charIndex;
      charIndex += 1;
      return { char, index };
    });

    if (wordIndex < words.length - 1) {
      const spaceIndex = charIndex;
      charIndex += 1;
      return { wordIndex, chars, spaceIndex };
    }

    return { wordIndex, chars, spaceIndex: null };
  });
}

export default function AnimatedHeading({
  as: Tag = 'h2',
  className = '',
  children,
  ...props
}) {
  const text = typeof children === 'string' ? children : String(children ?? '');
  const { ref, isVisible } = useScrollReveal();
  const words = splitWords(text);
  const charTotal = text.length;

  return (
    <Tag
      ref={ref}
      className={`animated-heading ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--char-total': charTotal }}
      aria-label={text}
      {...props}
    >
      <span className="animated-heading__words" aria-hidden="true">
        {words.map(({ wordIndex, chars, spaceIndex }) => (
          <span
            key={`word-${wordIndex}`}
            className="animated-heading__word"
            data-word-index={wordIndex}
          >
            {chars.map(({ char, index }) => (
              <span
                key={`char-${index}`}
                className="animated-heading__char"
                data-char-index={index}
                style={{ '--char-index': index }}
              >
                {char}
              </span>
            ))}
            {spaceIndex !== null && (
              <span
                className="animated-heading__char animated-heading__space"
                data-char-index={spaceIndex}
                style={{ '--char-index': spaceIndex }}
              >
                {' '}
              </span>
            )}
          </span>
        ))}
      </span>
    </Tag>
  );
}
