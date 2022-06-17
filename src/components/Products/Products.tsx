import Product from '../Product/Product';

interface ProductsProps {
  products: Array<any>;
  addToCart: void;
}

const styles: { [key: string]: React.CSSProperties } = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

const Products = ({ products, addToCart }: ProductsProps): JSX.Element => {
  return (
    <div style={styles.products}>
      {products.map((product: any) => (
        <Product key={product.name} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
