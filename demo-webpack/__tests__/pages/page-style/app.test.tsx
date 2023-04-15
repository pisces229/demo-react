import { render } from '@testing-library/react';
import Index from '@/pages/app-style/app';

test('App', () => {
  const rootElement = render(<Index />);
  console.log(rootElement.container.outerHTML);
  // const button = screen.getByText<HTMLButtonElement>('synchronous');
  // button.click();
});
