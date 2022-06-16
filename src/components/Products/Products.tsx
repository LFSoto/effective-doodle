import Product from '../Product/Product';

interface ProductsProps {
  products: Array<any>;
}

const Products = ({ products }: ProductsProps): JSX.Element => {
  return (
    <div>
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
