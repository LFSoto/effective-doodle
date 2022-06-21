import Cart from './Cart';
import { render, screen } from '@testing-library/react';

describe('Cart component', () => {
  test('should render', () => {
    render(<Cart cart={[]}/>);
    const cartComponent = screen.getByText('Cart')
    expect(cartComponent).toBeInTheDocument();
  });
});
