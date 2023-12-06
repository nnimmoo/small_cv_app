import React from 'react';
import { render, screen } from '@testing-library/react';
import Expertise from '../components/Expertise';

test('renders the Expertise component with experience items', () => {
  const data = [
    {
      date: '2020 - Present',
      info: {
        company: 'ABC Company',
        job: 'Software Engineer',
        description: 'Worked on various projects...',
      },
    },
  ];

  render(<Expertise data={data} />);

  const titleElement = screen.getByText('Experience');
  expect(titleElement).toBeInTheDocument();


  data.forEach((item) => {
    const companyElement = screen.getByText(item.info.company);
    expect(companyElement).toBeInTheDocument();

    const jobElement = screen.getByText(item.info.job);
    expect(jobElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(item.info.description);
    expect(descriptionElement).toBeInTheDocument();

    const dateElement = screen.getByText(item.date);
    expect(dateElement).toBeInTheDocument();
  });
});
