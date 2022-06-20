import BubbleAlert from '../BubbleAlert/BubbleAlert';

type CartProps = {
    amount: number
 }

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
  return (
    <div>
      <span style={styles.bubble}>
        <BubbleAlert value={10}/>
      </span>

      <button style={styles.cart}>Cart</button>
    </div>
  );
};

export default Cart;
