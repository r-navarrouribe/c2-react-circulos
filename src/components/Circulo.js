import { useState } from "react";

export const Circulo = () => {
  // Declaraciones
  const [seleccionado, setSeleccionado] = useState(false);

  const cambiarSeleccionado = () => {
    setSeleccionado(seleccionado ? false : true);
  };
  // Fin declaraciones

  return (
    <li
      className="circulo"
      style={{ backgroundColor: seleccionado ? "orange" : "grey" }}
      onClick={cambiarSeleccionado}
    ></li>
  );
};
