import axios from 'axios';


const apiURL = 'https://api.coincap.io/v2/assets?limit=10';

const reducer = (state = [], { type, payload }) => {
    switch (type) {
      case GET_DATA:
        return { ...state };
      case HANDLE_FETCH_ERROR:
        return state;
      default:
        return state;
    }
  };
  
  export default reducer;