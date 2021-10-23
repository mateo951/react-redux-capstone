import reducer from '../redux/coins';

describe('Testing reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
});
