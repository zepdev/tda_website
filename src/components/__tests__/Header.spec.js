import React from 'react';
import { render } from '../../utils/test-utils';
import Header from '../Header';

it('renders the component', () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Z IDEA/i)).toBeInTheDocument();
});
