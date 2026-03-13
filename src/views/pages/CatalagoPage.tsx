
import Encuentro from "../../components/Catalogo/Encuentro";
import Manual from "../../components/Catalogo/Manual";




import { usePageTitle } from "../../hooks/usePageTitle";



export default function CatalogoPage() {
  usePageTitle("Catalogo");

  return (
    <div>
      <Encuentro />
      <Manual/>

    </div>
  )
}
  