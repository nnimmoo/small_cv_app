import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skills from '../components/Skills'; // Adjust path as necessary
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // if you're using redux-mock-store

// Create a mock store for your test cases
const mockStore = configureStore([]);
let store;

describe('Skills Component', () => {
    beforeEach(() => {
        store = mockStore({
            skills: { skills: [] }
        });
    });

    test('renders without crashing', () => {
        render(
            <Provider store={store}>
                <Skills />
            </Provider>
        );
        expect(screen.getByText('Skills')).toBeInTheDocument();
    });

    test('toggles form visibility', () => {
        render(
            <Provider store={store}>
                <Skills />
            </Provider>
        );
        const showFormButton = screen.getByText('Show Form');
        fireEvent.click(showFormButton);
        expect(screen.getByLabelText('Skill Name:')).toBeInTheDocument();
    });

    test('toggles delete input visibility', () => {
        render(
            <Provider store={store}>
                <Skills />
            </Provider>
        );
        const showDeleteButton = screen.getByText('Delete');
        fireEvent.click(showDeleteButton);
        expect(screen.getByPlaceholderText('Enter skill name to delete')).toBeInTheDocument();
    });

});
