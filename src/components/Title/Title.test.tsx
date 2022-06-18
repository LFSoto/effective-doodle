import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title component', ()=>{
    test('should render title component', () => {
        render(<Title/>);
        const title = screen.getByText('Store');
        expect(title).toBeInTheDocument();
    })
})