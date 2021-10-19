import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchGetCoins } from '../../redux/coins';

const Coins = () => {
  const dispatch = useDispatch();
  // const { coins } = useSelector((state) => state.coins);
  // const loadAction = bindActionCreators(fetchGetCoins, dispatch);
  // useEffect(() => {
  //   if (missions.length === 0) dispatch(loadAction);
  // }, []);

  const handleClick = () => {
    dispatch(fetchGetCoins());
  };

  return (
    <>
      <div>Hello this is cripto data</div>
      <button type="button" onClick={() => handleClick()}>Click me</button>
    </>
  );
};

export default Coins;
