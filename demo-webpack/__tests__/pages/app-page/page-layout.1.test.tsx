import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Index from '@/pages/app-page/page-layout';
import { usePageLayoutStore } from '@/stores/app-page/page-layout-store';

test('Page Layout First', async () => {
  console.log(usePageLayoutStore.getState());
  usePageLayoutStore.getState().setMessage('First');
  render(
    <BrowserRouter>
      <Index />
    </BrowserRouter>,
  );
  const title = screen.getByText(/Page Layout/i);
  expect(title).toBeInTheDocument();
  const messageElement = screen.getByText(/message:\[.*\]/i);
  expect(messageElement.textContent).toBe('message:[First]');
});

test('Page Layout Second', async () => {
  console.log(usePageLayoutStore.getState());
  usePageLayoutStore.getState().setMessage('Second');
  render(
    <BrowserRouter>
      <Index />
    </BrowserRouter>,
  );
  const title = screen.getByText(/Page Layout/i);
  expect(title).toBeInTheDocument();
  const messageElement = screen.getByText(/message:\[.*\]/i);
  expect(messageElement.textContent).toBe('message:[Second]');
});
