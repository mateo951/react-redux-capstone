import renderer from 'react-test-renderer';
import {
  render, screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Coins from '../feature/coins/Coins';
import App from '../App';
import store from '../redux/configureStore';
import { fetchGetCoins } from '../redux/coins';

describe('pages test snapshots', () => {
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
});

describe('Rendered Data', () => {
  test('Displaying 10 crypto currencies', () => {
    render(
      <Provider store={store}>
        <Router>
          <App>
            <Coins />
          </App>
        </Router>
      </Provider>,
    );
    screen.queryAllByRole('link').forEach((role) => expect(role).toBeInTheDocument());
    expect(screen.queryAllByRole('link').length).toBe(11);
    // +1 do to the homepage link
  });
});
