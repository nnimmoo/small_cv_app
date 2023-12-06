import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portfolio from '../components/Portfolio'; // Adjust the path as necessary

describe('Portfolio Component', () => {
    test('renders without crashing', () => {
        render(<Portfolio />);
        expect(screen.getByText('Portfolio')).toBeInTheDocument();
    });

    test('filters images correctly', () => {
      render(<Portfolio />);
      // Click the 'UI' filter button
      fireEvent.click(screen.getByText('UI /'));
      // Check if the correct images are displayed
      const filteredImages = screen.getAllByAltText(/Image/); // Adjust based on how images are rendered
      expect(filteredImages.length).toBeGreaterThan(0);
      // Further assert that these images have the 'UI' tag
  });
  test('filters images correctly', () => {
    render(<Portfolio />);
    // Click the 'UI' filter button
    fireEvent.click(screen.getByText('Code'));
    // Check if the correct images are displayed
    const filteredImages = screen.getAllByAltText(/Image/); // Adjust based on how images are rendered
    expect(filteredImages.length).toBeGreaterThan(0);
    // Further assert that these images have the 'UI' tag
});
test('filters images correctly', () => {
    render(<Portfolio />);
    // Click the 'UI' filter button
    fireEvent.click(screen.getByText('All /'));
    // Check if the correct images are displayed
    const filteredImages = screen.getAllByAltText(/Image/); // Adjust based on how images are rendered
    expect(filteredImages.length).toBeGreaterThan(0);
    // Further assert that these images have the 'UI' tag
});
  
    test('displays popup on image click', () => {
        render(<Portfolio />);
        const image = screen.getAllByRole('img')[0]; // Adjust this to target a specific image
        fireEvent.click(image);
        expect(screen.getByText('Hieronymus Bosch Website')).toBeInTheDocument(); // Adjust based on expected content
        // Test other elements of the popup
    });

    test('closes popup on click', () => {
        render(<Portfolio />);
        const image = screen.getAllByRole('img')[0]; 
        fireEvent.click(image);
        const popup = screen.getByText('Hieronymus Bosch Website');
        fireEvent.click(popup);
        expect(popup).not.toBeInTheDocument();
    });
});
