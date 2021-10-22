import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { fetchGetCoins } from './redux/coins';
import Coins from './feature/coins/Coins';
import App from './App';

describe('pages test snapshots', () => {
  it('testing Coins page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const mainHeader = screen.getByText('Cripto Live');
    fireEvent.click(mainHeader);
    expect(screen.getByText('Most Valuable -')).toMatchSnapshot();
  });
  it('testing detail page', async () => {
    await store.dispatch(fetchGetCoins());
    const coinsPage = renderer
      .create(
        <Provider store={store}>
          <App>
            <Coins />
          </App>
        </Provider>,
      )
      .toJSON();
    expect(coinsPage).toMatchSnapshot();
  });
  it('testing detail interaction', async () => {
    await store.dispatch(fetchGetCoins());
    render(
      <Provider store={store}>
        <App>
          <Coins />
        </App>
      </Provider>,
    );
    const TetherDetail = screen.getByText('Tether - USDT');
    fireEvent.click(TetherDetail);
    expect(screen.getByText('Cryptocurrency')).toMatchSnapshot();
  });
});
