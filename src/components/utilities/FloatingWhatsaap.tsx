import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";


export default function FloatingWhatsaap() {
    const location = useLocation();

    let phone = "523315274782"; // ventas default
    let message = "Hola, quiero información sobre sus productos";

    if(location.pathname.includes("bolsa-trabajo")){
        phone = "523334520836"; // RRHH
        message = "Hola, quiero información sobre vacantes";
    }

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-50"
            aria-label="WhatsApp"
        >
            <FaWhatsapp size={44} />
        </a>
    )
}
