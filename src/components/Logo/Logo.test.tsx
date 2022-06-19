import Logo from './Logo';
import { render, screen } from '@testing-library/react';

describe('Logo component', () => {
  test('should render', () => {
    render(<Logo/>);
    const logo = screen.getByText('Shop');
    expect(logo).toBeInTheDocument();
  });
});