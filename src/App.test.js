import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders exchange screen', async () => {
  render(<App />);
  const linkElement = screen.getByText(/Select Your Amount/i);
  expect(linkElement).toBeInTheDocument();
});


test('input enter usd', async () => {
  render(<App />);
  const input = screen.queryByTestId("usd-value")
  expect(screen.queryByTestId("symbol-value")).value
  fireEvent.input(input, {
    target: { value: '200' }
  })
  await waitFor(() => {
    expect(screen.queryByTestId("symbol-value")).toHaveAttribute('value', '194.01')
  });

})