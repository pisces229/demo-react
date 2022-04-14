import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

it('test', () => {
  const { container } = render(<App />);
  console.log('render:', container.outerHTML);
  const element = screen.getByText(/App/i);
  console.log('screen:', element.outerHTML);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
