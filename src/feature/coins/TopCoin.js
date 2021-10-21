import React from 'react';
// import { useSelector } from 'react-redux';
import style from './topCoin.module.css';

// const { coins } = useSelector((state) => state.coins);
const TopCoin = () => {
  const handleClick = () => {
    console.log('Hello');
  };

  return (
    <>
      <div className={style.container}>
        <h3>Most Valuable - Bitcoin</h3>
        <div className={style.content}>
          <img onFocus={handleClick} alt="BTC" src="https://img.icons8.com/color/70/000000/bitcoin--v3.png" />
          <p>Coins Value</p>
          {/* { coins !== undefined ? <p>Math.max(...coins.coin_id)</p> : <p>test</p>} */}
          {/* // coins !== undefined ? coins.length > 0 ? coins.map((coin) => (
          //   <CoinItem key={coin.coin_id} />
          // )) : <p>Loading Data</p> : <p>Loading Data</p> */}
        </div>
      </div>
    </>
  );
};
export default TopCoin;
