import { useParams } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";


export default function ProductoPage() {

    //para paginas que sean subpaginas, por ejemplo industrias y proyuctos usar el url y jalar el ultimo campo del url para mostrarlo como titulo
    const { categoria } = useParams();
    
    //usamos el hook para mostrar el nombre de la pagina
    usePageTitle(categoria ?? "");

    return (
        <div>ProductoPage</div>
    )
}
