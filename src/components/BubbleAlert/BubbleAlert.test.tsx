import BubbleAlert from './BubbleAlert';
import { render, screen } from '@testing-library/react';

describe('Logo component', () => {
  test('should render when the value is lower that 10', () => {
    render(<BubbleAlert value={5}/>);
    const bubbleAlertComponent = screen.getByText('5');
    expect(bubbleAlertComponent).toBeInTheDocument();
  });

  test('should render when the value is higher that 9', () => {
    render(<BubbleAlert value={12}/>);
    const bubbleAlertComponent = screen.getByText('9+');
    expect(bubbleAlertComponent).toBeInTheDocument();
  });

  test('should render when the value is higher that 9', () => {
    render(<BubbleAlert value={undefined}/>);
    const bubbleAlertComponent = document.getElementById('bubbleAlert');
    expect(bubbleAlertComponent).toBeInTheDocument();
  });
});