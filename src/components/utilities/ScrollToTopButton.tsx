import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-28 right-7 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform z-50 
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
            aria-label="Ir arriba"
        >
            <FaArrowUp size={24} />
        </button>
    )
}
