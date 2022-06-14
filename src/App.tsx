import { Component, ReactNode } from 'react';
import Products from './components/Products';

const dummyProducts = [
  { name: 'Tomato', price: 1500, img: '/products/tomate.jpg' }, 
  { name: 'Arbejas', price: 2500, img: '/products/arbejas.jpg' },
  { name: 'Lechuga', price: 500, img: '/products/lechuga.jpg' },
]
class App extends Component{
  products:any = dummyProducts;
 
  render(): ReactNode {
    return (
      <div>
        <Products products={this.products}/>
      </div>
    );
  }
}

export default App;
