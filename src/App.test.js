import { render, screen } from '@testing-library/react';
import App from './App';

test('renders primary navigation', () => {
  render(<App />);
  const homeLinks = screen.getAllByText(/home/i);
  expect(homeLinks.length).toBeGreaterThan(0);
});
