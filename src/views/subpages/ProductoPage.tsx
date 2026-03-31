import { useParams } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import Bandas from "../../components/productos/Bandas";
import Aplicacion from "../../components/productos/Aplicacion";

export default function ProductoPage() {
  const { categoria } = useParams();

  usePageTitle(categoria ?? "");

 return (
  <>
    {categoria === "bandas" && <Bandas />}

    {["aplicacion", "aplicaciones"].includes((categoria ?? "").toLowerCase()) && (
      <Aplicacion />
    )}
  </>
);


}




