import React, { useEffect, useState } from 'react';
import {useInView} from "react-intersection-observer";

type CounterProps = {
    targetNumber: number;
    duration?: number;
    title: string;
  };

const Counter= ({targetNumber, title, duration = 2_000}:CounterProps) => {
       const { ref, inView } = useInView({
       threshold: 0.50,
        triggerOnce: true,
    });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const increment = Math.ceil(targetNumber / (duration / 50));
        const id = setInterval(() => {
            setCount((prev) => {
                const next = prev + increment;
                if (next >= targetNumber) {
                    clearInterval(id);
                    return targetNumber;
                }
                return next;
            });
        }, 50);

        return () => clearInterval(id);
    }, [inView, targetNumber, duration]);

    return (
        <div
            ref={ref}
            className="text-xl md:text-4xl lg:text-7xl flex flex-col items-center gap-4"
        >
            {count.toLocaleString()}+
            <span className="text-[10px] md:text-sm lg:text-xl">{title}</span>
        </div>
    );
};


export default Counter;
