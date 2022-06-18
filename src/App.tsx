import { useState } from 'react';
import Products from './components/Products/Products';
import Layout from './components/Layout/Layout';
import Title from './components/Title/Title';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
  const [products, setProducts] = useState([
    { name: 'Tomato', price: 1500, img: '/products/tomate.jpg' },
    { name: 'Peas', price: 2500, img: '/products/arbejas.jpg' },
    { name: 'Lettuce', price: 500, img: '/products/lechuga.jpg' },
  ]);

  const addToCart = () => {
    console.log('TODO');
  };

  return (
    <div>
      <NavBar />
      <Layout>
        <Title />
        <Products products={products} addToCart={addToCart} />
      </Layout>
    </div>
  );
};

export default App;
