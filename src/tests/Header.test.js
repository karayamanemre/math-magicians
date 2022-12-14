import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('test for creating the header', () => {
  test('created header', () => {
    const view = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(view).toMatchSnapshot();
  });
});
