/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import style from './coins.module.css';

const CoinsDetail = () => {
  const { coins } = useSelector((state) => state.coins);
  const { active } = useSelector((state) => state.coins);
  return (
    <div className={style.detailContainer}>
      <p>Cryptocurrency</p>
      <div className={style.infoContainer}>
        <p className={style.detailInfo}>
          {`${coins[active].coin_id} `}
          -
          {` ${coins[active].coin_name}`}
        </p>
      </div>
      <p>Value</p>
      <div className={style.infoContainer}>
        <p className={style.detailInfo}>{`$${coins[active].coin_value}`}</p>
      </div>
      <p>Daily Fluctuation</p>
      <div className={style.infoContainer}>
        <p className={style.detailInfo}>{`${coins[active].coin_change}%`}</p>
      </div>
    </div>
  );
};
export default CoinsDetail;
