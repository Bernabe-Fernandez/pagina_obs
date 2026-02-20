import { useEffect, useRef, useState } from "react";

interface FlipDigitProps {
  digit: number;
}

export default function FlipDigit({digit} :  FlipDigitProps) {
    const previousDigit = useRef(digit);
    const [flippingDigit, setFlippingDigit] = useState<number | null>(null);

    useEffect(() => {
        if (digit !== previousDigit.current) {
            setFlippingDigit(previousDigit.current);
        }
    }, [digit]);

    return (
        <div className="relative w-16 h-20 perspective overflow-hidden">

            {/* Número actual */}
            <div
                className={`absolute inset-0 flex items-center justify-center text-4xl font-bold bg-white text-blue-700 rounded-lg backface-hidden`}
            >
                {digit}
            </div>

            {/* Número animado */}
            {flippingDigit !== null && (
                <div
                    className="absolute inset-0 flex items-center justify-center text-4xl font-bold bg-white text-blue-700 rounded-lg animate-flip backface-hidden"
                    onAnimationEnd={() => {
                        previousDigit.current = digit;
                        setFlippingDigit(null);
                    }}
                >
                    {flippingDigit}
                </div>
            )}
        </div>
    );
}
