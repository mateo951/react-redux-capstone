/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchGetCoins, filterCoins, setDetail } from '../../redux/coins';
import CoinItem from './CoinItem';
import style from './coins.module.css';

const Coins = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetCoins());
  }, []);
  const { coins } = useSelector((state) => state.coins);
  const handleChange = (event) => {
    dispatch(filterCoins(event.target.value, coins));
  };

  const handleDetail = (coin_index) => {
    dispatch(setDetail(coin_index));
  };

  return (
    <div className={style.coinsContainer}>
      <div className={style.filtersContainer}>
        <p>Top 10 Most Valuable Crypto</p>
        <select onChange={handleChange}>
          <option defaultValue value="value">Value</option>
          <option value="fluctuation">Fluctuation</option>
        </select>
      </div>
      <ul className={style.coinBox}>
        {
          coins !== undefined ? coins.length > 0 ? coins.map((coin, index) => (
            <NavLink className={style.route} key={coin.coin_id} to="/coin-detail" onClick={() => { handleDetail(index); }}>
              <CoinItem
                key={coin.coin_id}
                coin_id={coin.coin_id}
                coin_name={coin.coin_name}
                coin_value={coin.coin_value}
              />
            </NavLink>
          )) : <p>Loading Data</p> : <p>Loading Data</p>
        }
      </ul>
    </div>
  );
};

export default Coins;
