import  { useState, useEffect, useRef } from 'react';
import NumberFlow from '@number-flow/react';

interface StatCounterProps {
  target: number;
}

export default function StatCounter({ target }: StatCounterProps) {
  const [value, setValue] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setValue(target), 100);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={containerRef} className="inline-flex">
      <NumberFlow 
        value={value} 
        transformTiming={{
          duration: 1500,
          easing: 'ease-out'
        }}
      />
    </span>
  );
}