import Layout from "./Layout";
import { render, screen } from '@testing-library/react';

describe('Layout component', () => {
  test('should render layout with props', () => {
    render(<Layout>Default text</Layout>);
    const imageProperty = screen.getByText('Default text');
    expect(imageProperty).toBeInTheDocument();
  });
});