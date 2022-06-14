import { Component, ReactNode } from 'react';
import Product from './Product';

interface Props {
  products: [];
}

class Products extends Component<Props>{
    products: any;
  constructor(props: Props) {
    super(props);
    this.products = props.products;
  }
  addToCart: any = () => {}
  render(): ReactNode {
    return (
      <div>
        {this.products.map((product: Product) => (
          <Product key={product.name} name={product.name} price={product.price} img={product.img}/>
        ))}
      </div>
    );
  }
}

export default Products;
