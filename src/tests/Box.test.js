import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from '../components/Box';

test('renders the Box component with title and content', () => {
  const title = 'About Me';
  const content = 'This is some content about me.';

  render(<Box title={title} content={content} />);

  const boxElement = screen.getByTestId('box');
  const titleElement = screen.getByText(title);
  const contentElement = screen.getByText(content);

  expect(boxElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});

test('renders the Box component with custom title and content', () => {
  const title = 'Custom Title';
  const content = 'Custom content goes here.';

  render(<Box title={title} content={content} />);

  const boxElement = screen.getByTestId('box');
  const titleElement = screen.getByText(title);
  const contentElement = screen.getByText(content);

  expect(boxElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});
