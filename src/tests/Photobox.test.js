import React from 'react';
import { render, screen } from '@testing-library/react';
import PhotoBox from '../components/Photobox';

test('renders the PhotoBox component with provided data', () => {
  const name = 'John Doe';
  const title = 'Software Engineer';
  const description = 'Experienced in web development.';
  const avatar = '/path/to/avatar.png';

  render(<PhotoBox name={name} title={title} description={description} avatar={avatar} />);


  const nameElement = screen.getByText(name);
  expect(nameElement).toBeInTheDocument();

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(description);
  expect(descriptionElement).toBeInTheDocument();

  const imageElement = screen.getByAltText(name);
  expect(imageElement).toBeInTheDocument();
});
