import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';
import App from './App';
test('画面に「こんにちは！」が表示されていること', () => {
  render(<App />);
  const element = screen.getByText('こんにちは！');
  expect(element).toBeInTheDocument();
});
