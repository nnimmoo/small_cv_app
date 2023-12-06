import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Used for simulating routing
import Panel from '../components/Panel';

test('renders the Panel component with navigation and "Go Back" button', () => {
  render(
    <MemoryRouter>
      <Panel />
    </MemoryRouter>
  );


  const navigation = screen.getByText('About me');
  expect(navigation).toBeInTheDocument();

  const goBackButton = screen.getByText('Go Back');
  expect(goBackButton).toBeInTheDocument();
  expect(goBackButton.tagName).toBe('BUTTON'); 


  const photoBox = screen.getByText('nimo');
  expect(photoBox).toBeInTheDocument();

  // Check if the image is rendered
  const image = screen.getByAltText('nimo');
  expect(image).toBeInTheDocument();
});
