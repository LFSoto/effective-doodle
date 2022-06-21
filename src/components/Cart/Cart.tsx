import BubbleAlert from '../BubbleAlert/BubbleAlert';
import CartLayout from '../CartLayout/CartLayout';

type CartProps = {
  cart: Array<any>;
  showCart(): void;
  cartIsVisible: boolean;
};

const styles = {
  cart: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'solid 1px',
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative' as 'relative',
    left: 12,
    top: 20,
  },
};

const Cart: React.FC<CartProps> = (cartProps) => {
  const { cart, cartIsVisible, showCart } = cartProps;
  const amount = cart.reduce((acc, el) => acc + el.amount, 0);
  return (
    <div>
      <span style={styles.bubble}>
        {amount !== 0 ? <BubbleAlert value={amount} /> : null}
      </span>
      <button style={styles.cart} onClick={showCart}>Cart</button>
      {cartIsVisible ? <CartLayout cart={cartProps.cart} /> : null}
    </div>
  );
};

export default Cart;
