import { render, screen } from '@testing-library/react';
import App from '../App';

test('container rendering test 1', () => {
  render(<App />);
  const testId = screen.getByTestId("app");
  expect(testId).toBeInTheDocument();
});

test('container rendering test 2', () => {
  render(<App />);
  const testId = screen.getByTestId("app");
  expect(testId).toHaveClass("container mt-5");
});
