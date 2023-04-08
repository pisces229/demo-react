import { render, waitFor } from '@testing-library/react';
import Index from '@/pages/app-api/lazy';

test('Lazy', async () => {
  const { getByText } = render(<Index />);
  await waitFor(() => {
    expect(getByText('Lazy Component')).toBeInTheDocument();
    // console.log(getByText('Lazy Component').outerHTML);
  });
});
