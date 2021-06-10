import { Circulo } from "./components/Circulo";

function App() {
  // Declaraciones
  const circulos = [
    { id: 1, nombre: "ciculo1" },
    { id: 2, nombre: "ciculo2" },
    { id: 3, nombre: "ciculo3" },
    { id: 4, nombre: "ciculo4" },
    { id: 5, nombre: "ciculo5" },
  ];
  // Fin declaraciones
  return (
    <>
      <ul className="contenedor">
        {circulos.map((circulo) => (
          <Circulo key={circulo.id} />
        ))}
      </ul>
    </>
  );
}

export default App;
