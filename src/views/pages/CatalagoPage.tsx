
import Encuentro from "../../components/Catalogo/Encuentro";





import { usePageTitle } from "../../hooks/usePageTitle";



export default function CatalogoPage() {
  usePageTitle("Catalogo");

  return (
    <div>
      <Encuentro />
    </div>
  );
}

