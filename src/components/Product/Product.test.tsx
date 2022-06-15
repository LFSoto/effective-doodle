import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './Product';

describe('Product component', () => {
  let dummyProduct: any;
  beforeEach(() => {
    dummyProduct = {
      name: 'DummyProduct',
      price: 2000,
      img: '/products/tomate.jpg',
    };
  });

  test('should render all its properties', () => {
    const {name, price, img} = dummyProduct;
    render(<Product name={name} price={price} img={img}/>);
    const nameProperty = screen.getByText('DummyProduct');
    const priceProperty = screen.getByText('2000');
    const imageProperty = screen.getByRole('img');
    expect(nameProperty).toBeInTheDocument();
    expect(priceProperty).toBeInTheDocument();
    expect(imageProperty).toHaveAttribute('src');
    expect(imageProperty).toBeInTheDocument();
  });
});