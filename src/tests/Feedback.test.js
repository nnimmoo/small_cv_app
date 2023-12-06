import React from 'react';
import { render, screen } from '@testing-library/react';
import Feedback from '../components/Feedback';

test('renders the Feedback component with feedback items', () => {
  const feedbackData = [
    {
      feedback: 'Great work!',
      reporter: {
        name: 'John Doe',
        photoUrl: 'john.jpg',
        citeUrl: 'https://example.com/johndoe',
      },
    },
    {
      feedback: 'Excellent job!',
      reporter: {
        name: 'Jane Smith',
        photoUrl: 'jane.jpg',
        citeUrl: 'https://example.com/janesmith',
      },
    },
  ];

  render(<Feedback data={feedbackData} />);

  const feedbackTitle = screen.getByText('Feedback');
  const feedbackItems = screen.getAllByTestId('feedback-item');

  expect(feedbackTitle).toBeInTheDocument();
  expect(feedbackItems).toHaveLength(feedbackData.length);

  feedbackData.forEach((item, index) => {
    const feedbackText = screen.getByText(item.feedback);
    const reporterName = screen.getByText(item.reporter.name);
    const citationLinks = screen.getAllByText('Citation');

    expect(feedbackText).toBeInTheDocument();
    expect(reporterName).toBeInTheDocument();
    expect(citationLinks[index]).toHaveAttribute('href', item.reporter.citeUrl);
  });
});
