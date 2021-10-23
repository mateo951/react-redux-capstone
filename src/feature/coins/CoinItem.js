import React from 'react';
import PropTypes from 'prop-types';
import style from './coinItem.module.css';

const CoinItem = ({
  coinId, coinName, coinValue, filter,
}) => (
  <>
    <li>
      <div className={style.coinItem}>
        <img alt="currency" src="https://img.icons8.com/fluency/35/000000/stack-of-coins.png" />
        <p>
          {`${coinId} `}
          -
          {` ${coinName}`}
        </p>
        <p>{filter === 'value' ? `$${coinValue}` : `${coinValue}%`}</p>
      </div>
    </li>
  </>
);

export default CoinItem;

CoinItem.propTypes = {
  coinId: PropTypes.string.isRequired,
  coinName: PropTypes.string.isRequired,
  coinValue: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
