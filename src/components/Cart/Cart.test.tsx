import Cart from './Cart';
import { render, screen } from '@testing-library/react';

describe('Cart component', () => {
  test('should render', () => {
    render(<Cart amount={12}/>);
    const cartComponent = screen.getByText('Cart')
    expect(cartComponent).toBeInTheDocument();
  });
});
