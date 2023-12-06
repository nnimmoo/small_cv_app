import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '../components/Navigation';

jest.mock('react-scroll', () => require('./react-scroll.js'));


test('renders the Navigation component with navigation items', () => {
    const navigationItems = [
      { label: 'About me', sectionId: 'about' },
    ];
  
    // Create a simple test HTML structure with sections and IDs
    document.body.innerHTML = `
      <div>
        <section id="about"></section>
        <section id="education"></section>
        <section id="skills"></section>
        <!-- Add sections for other navigation items -->
      </div>
    `;
  
    render(<Navigation />);
  
    const navigationItemsElements = screen.getAllByTestId('navigation-item');
  
    expect(navigationItemsElements).toHaveLength(7);
  
    navigationItems.forEach((item) => {
      const labelElement = screen.getByText(item.label);
      const sectionLink = screen.getByText(item.label);
  
      expect(labelElement).toBeInTheDocument();
      // Expect that when the section link is clicked, it scrolls to the corresponding section
      sectionLink.click();
      const section = document.getElementById(item.sectionId);
      expect(window.scrollY).toBe(section.offsetTop);
    });
  });