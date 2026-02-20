import BeneficioServicios from "../../components/Home/BeneficioServicios";
import Empresas from "../../components/Home/Empresas";
import Industrias from "../../components/Home/Industrias";
import Nosotros from "../../components/Home/Nosotros";
import Resultados from "../../components/Home/Resultados";
import SliderProductos from "../../components/Home/SliderProductos";
import { usePageTitle } from "../../hooks/usePageTitle";


export default function HomePage() {
    //usamos el hook para mostrar el nombre de la pagina
    usePageTitle("Home");

    return (
        <div>
            <BeneficioServicios/>
            <SliderProductos/>
            <Industrias/>
            <Empresas/>
            <Resultados/>
            <Nosotros/>
        </div>
    )
}
