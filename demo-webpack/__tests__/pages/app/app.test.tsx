import { render, screen } from '@testing-library/react';
import Index from '@/pages/app/app';

test('App', () => {
  const rootElement = render(<Index />);
  console.log(rootElement.container.outerHTML);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  // const button = screen.getByText<HTMLButtonElement>('synchronous');
  // button.click();
});
