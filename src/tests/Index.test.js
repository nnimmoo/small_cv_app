import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import App from '../App'; 
jest.mock('../services/server', () => ({
    makeServer: jest.fn(),
}));

describe('index.js', () => {
    let container;

    beforeAll(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterAll(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('renders the App component with BrowserRouter', () => {
        act(() => {
            ReactDOM.createRoot(container).render(
                <App />
            );
        });

        expect(container.querySelector('.Home-page')).not.toBeNull();
        act(() => {
            ReactDOM.createRoot(container).unmount();
        });
    });
});
