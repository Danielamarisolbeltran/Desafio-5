import React from 'react';
import './App.css';
// En React tenemos 2 tipos de componentes: 
// Los de tipo clase y los de tipo funcion
// Los tipo clase poseen un metodo render(){}
// Luego podemos retornar codigo JSX

// Components
import Header from './Components/Header/Header';
import CardExampleGroups from './Components/Cards/Cards';
  
class App extends React.Component {
  render() {
    return (<div className='App'>
      <h1>Bienvenidos</h1>
      <Header title='Tu tienda beauty virtual'
        subtitle='Aqui podras adquirir tus productos favoritos' />
      <div>
        <CardExampleGroups className="cards" name="Producto 1" img="Imagen del producto" price="Precio$" description="Descripcion del producto" />
        <CardExampleGroups className="cards" name="Producto 2" img="Imagen del producto" price="Precio$" description="Descripcion del producto" />
        <CardExampleGroups className="cards" name="Producto 3" img="Imagen del producto" price="Precio$" description="Descripcion del producto" />
        <CardExampleGroups className="cards" name="Producto 4" img="Imagen del producto" price="Precio$" description="Descripcion del producto" />
        <CardExampleGroups className="cards" name="Producto 5" img="Imagen del producto" price="Precio$" description="Descripcion del producto" />
        
      </div>

    </div>
    );
  }
}
export default App;
