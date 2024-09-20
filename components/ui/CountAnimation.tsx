import { useEffect, useState } from "react";

interface CountUpProps {
  endValue: number;
  duration?: number;
}

export function CountAnimation({ endValue, duration = 1500 }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 10;
    const increment = endValue / (duration / incrementTime);

    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, [endValue, duration]);

  return <span>{count.toLocaleString()}</span>;
}
