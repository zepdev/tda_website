import React from 'react';
import { render } from '@testing-library/react';
import ZeppelinIcon from '../ZeppelinIcon';

describe('ZeppelinIcon', () => {
  it('renders correctly', () => {
    const component = render(<ZeppelinIcon />);
    expect(component).toMatchSnapshot();
  });
});
