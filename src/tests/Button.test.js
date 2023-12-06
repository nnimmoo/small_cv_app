import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button'; // Adjust the path as necessary
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

describe('Button Component', () => {
    test('renders button with text', () => {
        render(<Button text="Click Me" />);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    test('applies styles from props', () => {
        const { getByText } = render(<Button color="blue" textColor="white" text="Styled Button" />);
        const button = getByText('Styled Button');
        expect(button).toHaveStyle('background-color: blue');
        expect(button).toHaveStyle('color: white');
    });

    test('calls onClick prop when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} text="Clickable" />);
        fireEvent.click(screen.getByText('Clickable'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('displays icon if icon prop is provided', () => {
        render(<Button icon={faPenToSquare} text="Icon Button" />);
        const button = screen.getByText('Icon Button');
      
        expect(button.querySelector('svg')).toBeInTheDocument();
    });
});
