import { render } from '@testing-library/react';
import Calculator from '../components/pages/Calculator';

describe('test for creating', () => {
  it('renders correctly', () => {
    const view = render(<Calculator />);
    expect(view).toMatchSnapshot();
  });
});
