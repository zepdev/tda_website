import React from 'react';
import { render } from '../../utils/test-utils';
import Content from '../Content';

it('renders the component', () => {
  const { getByText } = render(<Content />);
  expect(getByText('Z IDEA Dashboard')).toBeInTheDocument();
});
