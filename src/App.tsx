import { useState } from 'react';
import Products from './components/Products/Products';

const App: React.FC = () => {
  const [products, setProducts] = useState([
    { name: 'Tomato', price: 1500, img: '/products/tomate.jpg' },
    { name: 'Peas', price: 2500, img: '/products/arbejas.jpg' },
    { name: 'Lettuce', price: 500, img: '/products/lechuga.jpg' }
  ])

  const addToCart = () => {console.log('TODO');};

  return (
    <div>
      <Products products={products} addToCart={addToCart} />
    </div>
  );
};

export default App;
