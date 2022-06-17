import Product from '../Product/Product';

interface ProductsProps {
  products: Array<any>;
}

const styles: { [key: string]: React.CSSProperties } = {
  products:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
  }
}

const Products = ({ products }: ProductsProps): JSX.Element => {
  return (
    <div style={styles.products}>
      {products.map((product: any) => (
        <Product
          key={product.name}
          name={product.name}
          price={product.price}
          img={product.img}
        />
      ))}
    </div>
  );
};

export default Products;
