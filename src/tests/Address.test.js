import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Address from '../components/Address';

test('renders the Address component with contact information', () => {
    render(<Address />);
    const contactsTitle = screen.getByText('Contacts');
    
    const emailText = 'ninoguadze@gmail.com';
    const phoneText = '+995 551 12 56 03';
    const instagramText = 'https://www.instagram.com/nnimmoo';
    const githubText = 'https://github.com/nnimmoo';

    expect(contactsTitle).toBeInTheDocument();
    expect(screen.getByText(emailText)).toBeInTheDocument();
    expect(screen.getByText(phoneText)).toBeInTheDocument();
    expect(screen.getByText(instagramText)).toBeInTheDocument();
    expect(screen.getByText(githubText)).toBeInTheDocument();
  });