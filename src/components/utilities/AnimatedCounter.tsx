import { useEffect, useState } from "react";
import FlipDigit from "./FlipDigit";


type AnimatedCounterProps = {
    start?: number;
    end: number;
    duration?: number;
}


export default function AnimatedCounter({start = 0, end, duration = 2000,}: AnimatedCounterProps) {

    const [count, setCount] = useState(start);

    useEffect(() => {
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        const currentValue = Math.floor(
            start + (end - start) * percentage
        );

        setCount(currentValue);

        if (percentage < 1) {
            requestAnimationFrame(animate);
        }
        };

        requestAnimationFrame(animate);
    }, [start, end, duration]);

    const digits = count.toString().padStart(4, "0").split("");

    return (
        <div className="flex gap-2">
            {digits.map((digit, index) => (
                <FlipDigit key={index} digit={parseInt(digit)} />
            ))}
        </div>
    )
}
