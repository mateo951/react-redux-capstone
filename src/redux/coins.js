import axios from 'axios';

const apiURL = 'https://api.coincap.io/v2/assets?limit=10';
const GET_COINS = 'react-redux-capstone/coins/GET_COINS';
const UPDATE_FILTER = 'react-redux-capstone/coins/UPDATE_FILTER';
const SET_DETAIL = 'react-redux-capstone/coins/SET_DETAIL';
const HANDLE_FETCH_ERROR = 'react-redux-capstone/HANDLE_FETCH_ERROR';

const getCoins = (coins) => ({
  type: GET_COINS,
  payload: coins,
});

const handleFetchError = () => ({
  type: HANDLE_FETCH_ERROR,
});

export const setDetail = (index) => ({
  type: SET_DETAIL,
  payload: index,
});

export const fetchGetCoins = () => async (dispatch) => {
  try {
    const res = await axios.get(apiURL);
    const { data } = res.data;
    const coins = [];
    Object.entries(data).forEach(([key, value]) => {
      const coin = {
        coin_index: key,
        coin_rank: value.rank,
        coin_id: value.name,
        coin_name: value.symbol,
        coin_value: value.priceUsd.substring(0, 8),
        coin_change: value.changePercent24Hr.substring(0, 8),
      };
      coins.push(coin);
    });
    dispatch(getCoins(coins));
  } catch {
    dispatch(handleFetchError());
  }
};

const updateFilter = (activeFilter, coins) => ({
  type: UPDATE_FILTER,
  payload: { activeFilter, coins },
});

export const filterCoins = (filter, coins) => {
  if (filter !== 'value') {
    coins.sort((a, b) => b.coin_change - a.coin_change);
  } else {
    coins.sort((a, b) => b.coin_value - a.coin_value);
  }
  return updateFilter(filter, coins);
};

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_COINS: {
      const activeFilter = 'value';
      return { ...state, coins: payload.slice(), activeFilter };
    }
    case UPDATE_FILTER: {
      const { coins } = payload;
      const { activeFilter } = payload;
      return { ...state, coins: coins.slice(), activeFilter };
    }
    case SET_DETAIL:
      return { ...state, active: payload };
    case HANDLE_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducer;
