import NavBar from './NavBar';
import { render, screen } from '@testing-library/react';

describe('Layout component', () => {
  test('should render layout with props', () => {
    render(<NavBar cart={[]}/>);
    const logo = screen.getByText('Shop');
    const cart = screen.getByText('Cart');
    expect(logo).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  });
});