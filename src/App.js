import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "./App.css";
// En React tenemos 2 tipos de componentes:
// Los de tipo clase y los de tipo funcion
// Los tipo clase poseen un metodo render(){}
// Luego podemos retornar codigo JSX

// Components
import Header from "./Components/Header/Header";
import CardExampleGroups from "./Components/Cards/Cards";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  handleCounterUp = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleCounterDown = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Bienvenidos</h1>
        <Header
          title="Tu tienda beauty virtual"
          subtitle="Aqui podras adquirir tus productos favoritos"
        />
        <div>
          <h1>CARRITO COUNTER</h1>
          <h2 style={{ textAlign: "center" }}>
            Counter: {this.state.counter}{" "}
          </h2>
          <div
            style={{ display: "flex", justifyContent: "center", margin: 10 }}
          >
            <Button primary onClick={this.handleCounterUp}>
              +
            </Button>
            <Button secondary onClick={this.handleCounterDown}>
              -
            </Button>
          </div>

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
      </div>
    );
  }
}

export default App;
