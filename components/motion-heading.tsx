'use client';
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from 'react';

function plainText(node: ReactNode): string {
  return Children.toArray(node)
    .map((item) =>
      typeof item === 'string' || typeof item === 'number'
        ? String(item)
        : isValidElement<{ children?: ReactNode }>(item)
          ? item.type === 'br'
            ? ' '
            : plainText(item.props.children)
          : '',
    )
    .join('');
}

export default function MotionHeading({
  children,
  className = '',
  effect = 'sweep',
}: {
  children: ReactNode;
  className?: string;
  effect?: 'sweep' | 'reveal';
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          setSeen(true);
          if (effect === 'reveal') observer.disconnect();
        } else if (!entry.isIntersecting && effect === 'sweep') {
          setSeen(false);
        }
      },
      { threshold: [0, 0.6], rootMargin: '0px 0px -12% 0px' },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [effect]);
  let position = 0;
  function reveal(node: ReactNode, highlighted = false): ReactNode {
    return Children.map(node, (item) => {
      if (typeof item === 'string' || typeof item === 'number') {
        if (!highlighted || effect !== 'reveal') return item;
        return String(item)
          .split(/(\s+)/)
          .map((word, i) =>
            /^\s+$/.test(word) ? (
              word
            ) : (
              <span key={i} className="heading-word">
                {Array.from(word).map((char, j) => (
                  <span
                    key={j}
                    className="heading-character"
                    style={
                      {
                        '--letter-delay': `${Math.min(position++ * 35, 700)}ms`,
                      } as CSSProperties
                    }
                  >
                    {char}
                  </span>
                ))}
              </span>
            ),
          );
      }
      if (isValidElement<{ children?: ReactNode }>(item) && item.type !== 'br')
        return cloneElement(
          item as ReactElement<{ children?: ReactNode }>,
          {},
          reveal(item.props.children, highlighted || item.type === 'em'),
        );
      return item;
    });
  }
  return (
    <h2
      ref={ref}
      aria-label={plainText(children)}
      className={`motion-heading heading-${effect} ${seen ? 'in-view' : ''} ${className}`}
    >
      <span aria-hidden="true">{reveal(children)}</span>
    </h2>
  );
}
