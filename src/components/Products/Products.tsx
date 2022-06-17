import Product from '../Product/Product';

type ProductsProps = {
  products: Array<any>;
  addToCart(product:object): any;
}

const styles: { [key: string]: React.CSSProperties } = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

const Products:React.FC<ProductsProps> = (props) => {
  return (
    <div style={styles.products}>
      {props.products.map((product: any) => (
        <Product key={product.name} product={product} addToCart={props.addToCart} />
      ))}
    </div>
  );
};

export default Products;
