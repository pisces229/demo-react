import React from 'react';
import { render, screen } from '@testing-library/react';
import Lazy from './lazy';

test('renders learn react link', () => {
  render(<Lazy />);
  // const button = screen.getByText<HTMLButtonElement>('synchronous');
  // button.click();
});
