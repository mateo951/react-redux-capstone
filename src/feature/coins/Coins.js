import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchGetCoins, filterCoins, setDetail } from '../../redux/coins';
import CoinItem from './CoinItem';
import style from './coins.module.css';

const Coins = () => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.coins);
  useEffect(() => {
    if (coins === undefined || coins.length === 0) dispatch(fetchGetCoins());
  }, []);
  const { activeFilter } = useSelector((state) => state.coins);
  const handleChange = (event) => {
    dispatch(filterCoins(event.target.value, coins));
  };

  const handleDetail = (coinIndex) => {
    dispatch(setDetail(coinIndex));
  };

  return (
    <div className={style.coinsContainer}>
      <div className={style.filtersContainer}>
        <p>Top 10 Most Valuable Crypto</p>
        <select value={activeFilter} onChange={handleChange}>
          <option value="value">value</option>
          <option value="fluctuation">fluctuation</option>
        </select>
      </div>
      <ul className={style.coinBox}>
        {
          coins !== undefined ? coins.map((coin, index) => (
            <NavLink className={style.route} key={coin.coin_id} to="/coin-detail" onClick={() => { handleDetail(index); }}>
              <CoinItem
                key={coin.coin_id}
                coinId={coin.coin_id}
                coinName={coin.coin_name}
                coinValue={activeFilter === 'value' ? coin.coin_value : coin.coin_change}
                filter={activeFilter}
              />
            </NavLink>
          )) : <p>Loading Data</p>
        }
      </ul>
    </div>
  );
};

export default Coins;
