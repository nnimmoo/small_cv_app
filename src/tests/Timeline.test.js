import React from 'react';
import { render, screen } from '@testing-library/react';
import Timeline from "../components/Timeline";

const sampleData = [
  {
    date: '2022-01-15',
    title: 'Sample Title 1',
    description: 'Sample description 1',
  },
  {
    date: '2022-02-20',
    title: 'Sample Title 2',
    description: 'Sample description 2',
  },
];

test('renders the Timeline component with provided data', () => {
    render(<Timeline data={sampleData} />);
    const educationTitleElement = screen.getByText('Education');
    const eventDateElements = screen.getAllByTestId('event-date');
    const eventTitleElements = screen.getAllByTestId('event-title');
    const eventDescriptionElements = screen.getAllByTestId('event-info'); // Updated to match the Info component data-testid
  
    // Check if the "Education" title is rendered
    expect(educationTitleElement).toBeInTheDocument();
  
    // Check if the event details are rendered for each data entry
    sampleData.forEach((event, index) => {
      expect(eventDateElements[index]).toHaveTextContent(event.date);
      expect(eventTitleElements[index]).toHaveTextContent(event.title);
      expect(eventDescriptionElements[index]).toHaveTextContent(event.description);
    });
  });

test('renders the Timeline component with no data', () => {
  render(<Timeline data={[]} />);
  const educationTitleElement = screen.getByText('Education');
  expect(educationTitleElement).toBeInTheDocument();
});
