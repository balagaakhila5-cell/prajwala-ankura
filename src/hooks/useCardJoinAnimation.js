import { useEffect, useRef, useState } from 'react';

export function useCardJoinAnimation() {
  const ref = useRef(null);
  const [phase, setPhase] = useState('separated');
  const timerRef = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('separated');
          clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => setPhase('joined'), 120);
        } else {
          clearTimeout(timerRef.current);
          setPhase('separated');
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      clearTimeout(timerRef.current);
    };
  }, []);

  return { ref, phase };
}
