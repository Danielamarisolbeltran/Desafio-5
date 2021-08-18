import React from "react";
import { Button } from "semantic-ui-react";
import "./App.css";
// En React tenemos 2 tipos de componentes:
// Los de tipo clase y los de tipo funcion
// Los tipo clase poseen un metodo render(){}
// Luego podemos retornar codigo JSX

// Components
import Header from "./Components/Header/Header";
import CardExampleGroups from "./Components/Cards/Cards";

//Hooks: estado dentro de un componente funcion

const App = () => {
  const [counter, setCounter] = React.useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1>Bienvenidos</h1>
      <Header
        title="Tu tienda beauty virtual"
        subtitle="Aqui podras adquirir tus productos favoritos"
      />
      <p>{counter}</p>
      <button onClick={handleIncrement}>Agregar producto</button>
      <button onClick={handleDecrement}>Eliminar producto</button>

      <div>
        <CardExampleGroups
          className="cards"
          name="Producto 1"
          img="Imagen del producto"
          price="Precio$"
          description="Descripcion del producto"
        />
        <CardExampleGroups
          className="cards"
          name="Producto 2"
          img="Imagen del producto"
          price="Precio$"
          description="Descripcion del producto"
        />
        <CardExampleGroups
          className="cards"
          name="Producto 3"
          img="Imagen del producto"
          price="Precio$"
          description="Descripcion del producto"
        />
        <CardExampleGroups
          className="cards"
          name="Producto 4"
          img="Imagen del producto"
          price="Precio$"
          description="Descripcion del producto"
        />
        <CardExampleGroups
          className="cards"
          name="Producto 5"
          img="Imagen del producto"
          price="Precio$"
          description="Descripcion del producto"
        />
      </div>
    </div>
  );
};

export default App;
