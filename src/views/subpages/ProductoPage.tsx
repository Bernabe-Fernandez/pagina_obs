import { useParams } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import Bandas from "../../components/productos/Bandas";

export default function ProductoPage() {
  const { categoria } = useParams();

  usePageTitle(categoria ?? "");

  return (
    <>
      

      {categoria === "bandas" && <Bandas />}
    </>
  );
}

