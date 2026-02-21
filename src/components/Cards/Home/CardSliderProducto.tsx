import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  descripcion: string;
  image: string;
  alt: string;
  url: string;
};

export default function CardSliderProducto({ title, descripcion, image, alt, url }: CardProps) {
  return (
    <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-lg group">
      
      {/* Imagen */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-800/40 to-transparent" />

      {/* Contenido */}
      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-xl font-semibold mb-2 capitalize">{title}</h3>
        <p className="text-sm opacity-90 mb-4">{descripcion}</p>

        <Link 
          to={url}
          className="bg-white text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition">
          Ver más
        </Link>
      </div>
    </div>
  )
}
