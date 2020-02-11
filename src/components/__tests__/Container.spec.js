import React from 'react';
import { render } from '../../utils/test-utils';
import Container from '../Container';

it('renders title', () => {
  const { getByText } = render(<Container title="mockTitle" />);
  expect(getByText('mockTitle')).toBeInTheDocument();
});
