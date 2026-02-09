import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="relative text-white mt-10">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-[url('/images/backgrounds/footer.jpg')] bg-cover bg-center"
      />

      {/* Overlay azul tenue */}
      <div className="absolute inset-0 bg-azulobs-500/90" />

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:mx-16 lg:mx-auto">

          {/* Columna 1 - Marca */}
          <div>
            <img src="/images/logos/internos/slogan.png" alt="slogan-obs" className="h-44 object-contain md:mx-auto lg:h-52"/>
          </div>

          {/* Columna 3 - Contacto */}
          <div>
            <h3 className="font-semibold mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="tel:+523336632500">33 3663 2500</a></li>
              <li><a href={`mailto:info@omnibandas.com.mx`}>info@omnibandas.com.mx</a></li>
              <li><a href={`mailto:ventas@omnibandas.com.mx`}>ventas@omnibandas.com.mx</a></li>
              <li>Industria del vestido 2326, Zapopan Industrial Nte. 45130, Zapopan, Jalisco</li>
            </ul>
          </div>

          {/* Columna 2 - Navegación */}
          <div>
            <h3 className="font-semibold mb-3">Navegación</h3>
            <ul className="space-y-2 text-sm font-light grid grid-cols-2 gap-2">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/">Nosotros</Link></li>
              <li><Link to="/">Productos</Link></li>
              <li><Link to="/">Industrias</Link></li>
              <li><Link to="/">Novedades</Link></li>
              <li><Link to="/">Contacto</Link></li>
              <li><Link to="/">Fabricación de transportadores</Link></li>
              <li><Link to="/">Bolsa de trabajo</Link></li>
            </ul>
          </div>

          {/* Columna 4 - Redes*/}
          <div>
            <h3 className="font-semibold mb-3">Contacto</h3>
            <div className="flex gap-4 items-center my-4">
              <p className="text-sm text-white/80">Siguenos</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:opacity-80 hover:scale-110 transition text-white"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:opacity-80 hover:scale-110 transition text-white"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:opacity-80 hover:scale-110 transition text-white"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 flex-col">
              <Link to={'/privacidad'} className="text-sm text-white/80">
                Aviso de Privacidad
              </Link>
              
              <a 
                href="/calidad/politica_gestion_calidad.pdf"
                target="_blank"
                className="text-sm text-white/80 flex flex-col items-start text-left"
              >
                <img 
                  src="/images/logos/certificaciones/iso.png" 
                  alt="logo-iso" 
                  className="h-12 object-contain"
                />
                <span>Política de gestión de calidad</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Omnibandas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
