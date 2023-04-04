import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from './page-first';
import { BrowserRouter } from 'react-router-dom';

test('Page First', async () => {
  render(
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
  // const actionElement = screen.getByText('Action:[0]');
  // expect(actionElement).toBeInTheDocument();
});
