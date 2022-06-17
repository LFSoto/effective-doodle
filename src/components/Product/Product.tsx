import Button from './Button'

interface ProductProps {
  product: {
    name: string;
    img: string;
    price: number;
  };
  addToCart(product:object): void;
}

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

const Product = ({ product, addToCart }: ProductProps): JSX.Element => {
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
