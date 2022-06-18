import NavBar from './NavBar';
import { render, screen } from '@testing-library/react';

describe('Layout component', () => {
  test('should render layout with props', () => {
    render(<NavBar/>);
    const logo = screen.getByText('Logo');
    const cart = screen.getByText('Cart');
    expect(logo).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  });
});