import React from 'react';
import { render, screen } from '@testing-library/react';
import Info from '../components/Info';

test('renders the Info component with provided text and children', () => {
  const title = 'Sample Title';
  const text = 'Sample Description';

  render(<Info children={title} text={text} />);
  const infoWrapper = screen.getByTestId('event-info');
  const titleElement = screen.getByTestId('event-title');
  const textElement = screen.getByTestId('event-text');

  // Check if the info component is rendered
  expect(infoWrapper).toBeInTheDocument();

  // Check if the title and text are rendered correctly
  expect(titleElement).toHaveTextContent(title);
  expect(textElement).toHaveTextContent(text);
});

test('renders the Info component with missing text', () => {
  const title = 'Sample Title';

  render(<Info children={title} />);
  const infoWrapper = screen.getByTestId('event-info');
  const titleElement = screen.getByTestId('event-title');
  const textElement = screen.queryByTestId('event-text'); // Use queryByTestId to check if the element doesn't exist

  // Check if the info component is rendered
  expect(infoWrapper).toBeInTheDocument();

  // Check if the title is rendered and the text is missing
  expect(titleElement).toHaveTextContent(title);
  expect(textElement).toBeNull(); // text element should not exist
});
