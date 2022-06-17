import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('should render all its properties', () => {
    const text = 'Button test';
    render(<Button>{text}</Button>);
    const buttonElement = screen.getByRole('button', {name:`${text}`});
    expect(buttonElement).toBeInTheDocument();
  });
});
