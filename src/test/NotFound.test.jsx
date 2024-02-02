// NotFound.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../components/NotFound';

test('renders NotFound component', () => {
  render(<NotFound />);

  const headingElement = screen.getByText(/Oops! Not Found Element!/i);

  expect(headingElement).toBeInTheDocument();
});
