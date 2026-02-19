import BeneficioServicios from "../../components/Home/BeneficioServicios";
import SliderProductos from "../../components/Home/SliderProductos";
import { usePageTitle } from "../../hooks/usePageTitle";


export default function HomePage() {
    //usamos el hook para mostrar el nombre de la pagina
    usePageTitle("Home");

    return (
        <div>
            <BeneficioServicios/>
            <SliderProductos/>
        </div>
    )
}
