import { Link, NavLink} from "react-router-dom";
import { FaSearch, FaRegWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function NavBar() {

    const [viewMenu, setViewMenu] = useState(false);


  return (
    <nav className="sticky top-0 left-0 w-full z-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-2 py-2 flex justify-between items-center">
            <Link to="/">
                <img src="/images/logos/internos/logotipo.png" alt="logo omnibandas" className="h-10 md:h-14 lg:h-16 object-contain " />
            </Link>

            <ul className={`uppercase font-medium text-azulobs-500 gap-6
                lg:flex lg:justify-center lg:static lg:h-auto
                ${viewMenu ? "flex flex-col absolute top-full left-0 w-full bg-white p-6 shadow-md" : "hidden"}`}>

                {/* NORMAL LINKS */}
                <li className="hover:bg-azulobs-600 hover:text-white">
                    <NavLink to="/" className={({ isActive }) =>
                        `block w-full p-2 ${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>
                        Inicio
                    </NavLink>
                </li>

                <li className="hover:bg-azulobs-600 hover:text-white ">
                    <NavLink to="/nosotros" className={({ isActive }) =>
                        `block w-full p-2 ${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>
                        Nosotros
                    </NavLink>
                </li>

                {/* PRODUCTOS DROPDOWN */}
                <li className="relative group p-2 hover:bg-azulobs-600 hover:text-white">
                    <span className="cursor-pointer">Productos</span>

                    <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-xl border rounded-lg p-6 w-80 md:w-[600px] z-50">
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[15px] text-azulobs-600">
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/bandas" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Bandas transportadoras</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/termosoldables" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Bandas termosoldables</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/transmision" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Bandas de transmision de potencia</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/modulares" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Bandas modulares</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/guias" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Guías de orientación</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/olanes" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Olanes</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/grapas" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Grapas</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/empujadores" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Empujadores</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/transportadores" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Fabricación de transportadores</NavLink></li>
                         <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/herramientas" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Herramientas industriales </NavLink></li>
                        </ul>
                    </div>
                </li>

                {/* INDUSTRIAS DROPDOWN */}
                <li className="relative group p-2 hover:bg-azulobs-600 hover:text-white">
                    <span className="cursor-pointer">Industrias</span>

                    <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-xl border rounded-lg p-6 w-80 md:w-[600px] z-50">
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[15px] text-azulobs-600">
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/verduras" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>verduras y legumbres</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/chocolatera" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Chocolatera</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/confitera" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Confitera</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/panificadora" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Panificadora</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/embotelladora" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Embotelladora</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/tequilera" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Tequilera</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/granos" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Granos</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/farmaceutica" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Farmacéutica</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/latas" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Latas</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/cartonera" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Cartonera</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/piedrera" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Piedrera</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/llantera" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Llantera</NavLink></li>
                         <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/textil" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Textilera</NavLink></li>
                         <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/embutidos" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Embutidos</NavLink></li>
                          <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/envasado" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Envasado pet</NavLink></li>
                        <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/frutas" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Frutas</NavLink></li>
                        </ul>
                    </div>
                </li>

                <li className="hover:bg-azulobs-600 hover:text-white">
                    <NavLink to="/catalogo" className={({ isActive }) =>
                        `block w-full p-2 ${isActive ? "text-azulobs-700 font-bold border-b-2 border-azulobs-600" : ""}`}>
                        Catálogo
                    </NavLink>
                </li>

                <li className="hover:bg-azulobs-600 hover:text-white">
                    <NavLink to="/bolsa_trabajo" className={({ isActive }) =>
                        `block w-full p-2 ${isActive ? "text-azulobs-700 font-bold border-b-2 border-azulobs-600" : ""}`}>
                        Bolsa de trabajo
                    </NavLink>
                </li>

                <li className="hover:bg-azulobs-600 hover:text-white">
                    <NavLink to="/contacto" className={({ isActive }) =>
                        `block w-full p-2 ${isActive ? "text-azulobs-700 font-bold border-b-2 border-azulobs-600" : ""}`}>
                        Contacto
                    </NavLink>
                </li>

                <li className="hover:bg-azulobs-600 hover:text-white">
                    <NavLink to="/blog" className={({ isActive }) =>
                        `block w-full p-2 ${isActive ? "text-azulobs-700 font-bold border-b-2 border-azulobs-600" : ""}`}>
                        Blog
                    </NavLink>
                </li>
            </ul>

            <div className="flex gap-4 justify-center">
                <button className="lg:hidden text-azulobs-700 hover:text-azulobs-500" onClick={() => setViewMenu(!viewMenu)}>{viewMenu ? (<FaRegWindowClose size={24}/>) : (<GiHamburgerMenu size={24}/>)}</button>
            
                <button className="text-azulobs-700 hover:text-azulobs-500 transition">
                    <FaSearch size={20} />
                </button>
            </div>
        
        </div>
    </nav>
  )
}
