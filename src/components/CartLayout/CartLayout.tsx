type CartLayoutProps = {
  cart: Array<any>;
};

const styles = {
  CartLayout: {
    backgroundColor: '#fff',
    position: 'absolute' as 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0,0,0, 0.3)',
    borderRadius: '15px',
    width: '300px',
    right: 50,
    Ul: {
      margin: 0,
      padding: 0,
    },
    Imgs: {
      width: '50px',
      height: '32px',
    },
    Product: {
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '25px 20px',
      borderBottom: 'solid 1px #aaa',
    },
  },
};

const CartLayout: React.FC<CartLayoutProps> = (props) => {
  const { cart } = props;
  console.log(cart);
  return (
    <div style={styles.CartLayout}>
      <ul style={styles.CartLayout.Ul}>
        {cart.map((element) => (
          <li key={element.name} style={styles.CartLayout.Product}>
            <img
              key={element.name}
              alt={element.name}
              src={element.img}
              style={styles.CartLayout.Imgs}
            />
            {element.name}
            <span>{element.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartLayout;
