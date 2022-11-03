import { render } from '@testing-library/react';
import Joke from '../components/pages/Joke';

describe('test for creating the jokes section', () => {
  it('created joke page', () => {
    const view = render(<Joke />);
    expect(view).toMatchSnapshot();
  });
});
