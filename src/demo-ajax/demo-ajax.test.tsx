import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { DemoAjaxAxios } from './demo-ajax-axios';

it('test', async () => {
  render(<DemoAjaxAxios />);
  const button = screen.getByText<HTMLButtonElement>('synchronous');
  // console.log('synchronous:', button);
  button.click();
  // expect(linkElement).toBeInTheDocument();
  // await waitFor(() => {
  //   expect(screen.getByText("test msw")).toBeInTheDocument();
  // });
});
