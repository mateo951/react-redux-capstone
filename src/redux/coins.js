/* eslint-disable no-unused-vars */
import axios from 'axios';

const apiURL = 'https://api.coincap.io/v2/assets?limit=10';
const GET_COINS = 'react-redux-capstone/missions/GET_COINS';
const HANDLE_FETCH_ERROR = 'react-redux-capstone/HANDLE_FETCH_ERROR';

const getCoins = (coins) => ({
  type: GET_COINS,
  payload: coins,
});

const handleFetchError = () => ({
  type: HANDLE_FETCH_ERROR,
});

export const fetchGetCoins = () => async (dispatch) => {
  try {
    axios.get(apiURL)
      .then((response) => {
        const coins = [];
        const res = response.data.data;
        Object.entries(res).forEach(([key, value]) => {
          const coin = {
            coin_id: value.name,
            coin_name: value.symbol,
            coin_value: value.priceUsd,
          };
          coins.push(coin);
        });
        dispatch(getCoins(coins));
      });
  } catch {
    dispatch(handleFetchError());
  }
};

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_COINS:
      return { ...state, coins: payload.slice() };
    case HANDLE_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducer;
