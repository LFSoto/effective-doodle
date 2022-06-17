import Button from '../Button/Button';

type ProductProps = {
  product: {
    name: string;
    img: string;
    price: number;
  };
  addToCart(product: object): any;
};

const styles: { [key: string]: React.CSSProperties } = {
  product: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  img: {
    width: '100%',
  },
};

const Product: React.FC<ProductProps> = (props) => {
  const { product, addToCart } = props;
  return (
    <div style={styles.product}>
      <img alt={product.name} src={product.img} style={styles.img} />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <Button onClick={() => addToCart(product)}>Add to cart</Button>
    </div>
  );
};

export default Product;
