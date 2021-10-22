/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import style from './coinItem.module.css';

const CoinItem = ({
  coin_id, coin_name, coin_value, filter,
}) => (
  <>
    <li>
      <div className={style.coinItem}>
        <img alt="currency" src="https://img.icons8.com/fluency/35/000000/stack-of-coins.png" />
        <p>
          {`${coin_id} `}
          -
          {` ${coin_name}`}
        </p>
        <p>{filter === 'value' ? `$${coin_value}` : `${coin_value}%`}</p>
      </div>
    </li>
  </>
);
// const dispatch = useDispatch();
export default CoinItem;

CoinItem.propTypes = {
  coin_id: PropTypes.string.isRequired,
  coin_name: PropTypes.string.isRequired,
  coin_value: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
