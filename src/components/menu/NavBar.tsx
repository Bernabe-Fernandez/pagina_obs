import { NavLink} from "react-router-dom";
import { FaSearch, FaRegWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function NavBar() {

    const [viewMenu, setViewMenu] = useState(false);


  return (
    <nav className="sticky top-0 left-0 w-full z-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-2 py-2 flex justify-between items-center">
            <img src="images/logos/internos/logotipo.png" alt="logo omnibandas" className="h-10 md:h-14 lg:h-16 object-contain " />

            <ul className={`uppercase font-medium text-azulobs-500 gap-6
                lg:flex lg:justify-center lg:static lg:h-auto
                ${viewMenu ? "flex flex-col absolute top-full left-0 w-full bg-white p-6 shadow-md" : "hidden"}`}>

                {/* NORMAL LINKS */}
                <li className="p-2 hover:bg-azulobs-600 hover:text-white ">
                    <NavLink to="/" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700font-bold border-b-2 border-azulobs-600" : ""}`}>
                        Inicio
                    </NavLink>
                </li>

                <li className="p-2 hover:bg-azulobs-600 hover:text-white ">
                    <NavLink to="/nosotros" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>
                        Nosotros
                    </NavLink>
                </li>

                {/* PRODUCTOS DROPDOWN */}
                <li className="relative group p-2 hover:bg-azulobs-600 hover:text-white">
                    <span className="cursor-pointer">Productos</span>

                    <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-xl border rounded-lg p-6 w-80 md:w-[450px] z-50">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-azulobs-600">
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/bandas" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Bandas transportadoras</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/termosellables" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Bandas termosoldables</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/modulares" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Bandas de transmision de potencia</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/modulares" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Bandas modulares</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/guias" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Guías de orientación</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/empalmes" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Olanes</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/empalmes" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Grapas</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/empalmes" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Empujadores</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/empalmes" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Fabricación de transportadores</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/productos/empalmes" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Proyectos Especiales</NavLink></li>
                        </ul>
                    </div>
                </li>

                {/* INDUSTRIAS DROPDOWN */}
                <li className="relative group p-2 hover:bg-azulobs-600 hover:text-white">
                    <span className="cursor-pointer">Industrias</span>

                    <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-xl border rounded-lg p-6 w-80 md:w-[450px] z-50">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-azulobs-600">
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/alimentos" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Agroalimentaria</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/mineria" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Chocolatera</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/mineria" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Confitera</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/mineria" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Panificadora</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/mineria" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Embotelladora</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/mineria" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Tequilera</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/mineria" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Granos</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/farmaceutica" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Farmacéutica</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/automotriz" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Latas</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/automotriz" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Cartonera</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/automotriz" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Tabacalera</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/automotriz" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Piedrera</NavLink></li>
                            <li className="hover:bg-azulobs-600 hover:text-white p-1"><NavLink to="/industrias/automotriz" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 hover:text-white font-bold border-b-2 border-azulobs-600" : ""}`}>Llantera</NavLink></li>
                        </ul>
                    </div>
                </li>

                <li className="p-2 hover:bg-azulobs-600 hover:text-white">
                    <NavLink to="/catalago" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 font-bold border-b-2 border-azulobs-600" : ""}`}>
                        Catalago
                    </NavLink>
                </li>

                <li className="p-2 hover:bg-azulobs-600 hover:text-white">
                    <NavLink to="/bolsa_trabajo" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 font-bold border-b-2 border-azulobs-600" : ""}`}>
                        Bolsa de trabajo
                    </NavLink>
                </li>

                <li className="p-2 hover:bg-azulobs-600 hover:text-white">
                    <NavLink to="/contacto" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 font-bold border-b-2 border-azulobs-600" : ""}`}>
                        Contacto
                    </NavLink>
                </li>

                <li className="p-2 hover:bg-azulobs-600 hover:text-white">
                    <NavLink to="/blog" className={({ isActive }) =>
                        `${isActive ? "text-azulobs-700 font-bold border-b-2 border-azulobs-600" : ""}`}>
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
