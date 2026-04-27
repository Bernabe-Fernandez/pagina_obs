import { usePageTitle } from "../../hooks/usePageTitle";


import Aplicacion from "../../components/productos/Aplicacion";
import Ventajas from "../../components/productos/Ventajas";
import Tipos from "../../components/productos/Tipos";
import Industria from "../../components/productos/Industria";
import Catal from "../../components/productos/Catal";
import { carrosObs } from "../../data/carros";

export default function BandasPage() {

  // aca debemos tomar la categoria que venga en el url de la pagina

  usePageTitle("Bandas Transportadoras");

  console.log(carrosObs);

  const carro = carrosObs.filter((car) => car.marca === 'chevrolet');

  console.log(carro);

  return (
    <div>
      <h1>{carro[0].marca}</h1>
      <Ventajas />
      <Aplicacion />
      <Tipos />
      <Industria />
      <Catal />

    
    </div>
  );
}




