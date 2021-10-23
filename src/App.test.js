import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';

describe('Test app snapshots', () => {
  it('testing rendering of page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const mainHeader = screen.getByText('Cripto Live');
    fireEvent.click(mainHeader);
    expect(screen.getByText('Most Valuable -')).toMatchSnapshot();
  });
});
