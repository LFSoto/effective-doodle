const styles = {
  cart: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'solid 1px',
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
  },
};

const Cart: React.FC = () => {
  return (
    <div>
      <button style={styles.cart}>Cart</button>
    </div>
  );
};

export default Cart;
