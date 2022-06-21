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
  };

  const [cart, setCart] = useState<any>([]);
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const addToCart = (product: any) => {
    if (cart.find((element: any) => element.name === product.name)) {
      const newCart = cart.map((element: any) =>
        element.name === product.name
          ? { ...element, amount: element.amount + 1 }
          : element
      );
      return setCart(newCart);
    } else {
      return setCart(cart.concat({ ...product, amount: 1 }));
    }
  };

  const showCart = () => {
    setCartIsVisible(!cartIsVisible);
  };

  return (
    <div>
      <NavBar cart={cart} showCart={showCart} cartIsVisible={cartIsVisible}/>
      <Layout>
        <Title />
        <Products products={state.products} addToCart={addToCart} />
      </Layout>
    </div>
  );
};

export default App;
