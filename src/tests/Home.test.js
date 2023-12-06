import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Wrap the component with Router
import Home from '../pages/Home';

test('renders the Home component', () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const titleElement = screen.getByText(/Nino Goguadze/i);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(/Aspiring programmer based in tbilisi/i);
  expect(descriptionElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/Know More/i);
  expect(buttonElement).toBeInTheDocument();
});
