import { Component, ReactNode } from 'react';
import Product from '../Product/Product';

interface ProductsProps {
  products: Array<any>;
}
interface ProductsState {
  products: Array<Product>;
}

class Products extends Component<ProductsProps, ProductsState> {
  constructor(props: ProductsProps) {
    super(props);
    this.state = {
      products: props.products,
    };
  }

  addToCart: any = () => {};
  render(): ReactNode {
    return (
      <div>
        {this.state.products.map((product: any) => (
          <Product
            key={product.name}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    );
  }
}

export default Products;
