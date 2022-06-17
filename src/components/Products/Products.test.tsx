import { render, screen } from '@testing-library/react';
import Products from './Products';

describe('Products component', () => {
  let dummyProducts: Array<Object>;
  const addToCart = () => {};
  beforeEach(() => {
    dummyProducts = [
      { name: 'TestingItem', price: 1500, img: '/products/tomate.jpg' },
    ];
  });

  test('should render text content', () => {
    render(<Products products={dummyProducts} addToCart={addToCart}/>);
    const linkElement = screen.getByText('TestingItem');
    expect(linkElement).toBeInTheDocument();
  });

  test('should render images', () => {
    render(<Products products={dummyProducts} addToCart={addToCart} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src');
    expect(image).toBeInTheDocument();
  });
});
