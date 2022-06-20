import { useState } from 'react';
import Products from './components/Products/Products';
import Layout from './components/Layout/Layout';
import Title from './components/Title/Title';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
  const state = {
    products: [
      { name: 'Tomato', price: 1500, img: '/products/tomate.jpg' },
      { name: 'Peas', price: 2500, img: '/products/arbejas.jpg' },
      { name: 'Lettuce', price: 500, img: '/products/lechuga.jpg' },
    ],
    cart: [],
    setState(product: object): void {},
  };

  const [cart, setCart] = useState([]);

  // const addToCart = (product: object) => {
  //   console.log(state.cart);

  //   return state.setState({
  //     cart: state.cart.concat({
  //       ...product,
  //       amount: 1,
  //     }),
  //   });
  // };

  const addToCart = (product: object) => {
    //setCart([state.cart.concat({ ...product, amount: 1 })]);
  };

  return (
    <div>
      <NavBar amount={12} />
      <Layout>
        <Title />
        <Products products={state.products} addToCart={addToCart} />
      </Layout>
    </div>
  );
};

export default App;
