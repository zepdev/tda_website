import React from 'react';
import { render } from '../../utils/test-utils';
import Footer from '../Footer';

it('renders the component', () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/Zeppelin/i)).toBeInTheDocument();
});
