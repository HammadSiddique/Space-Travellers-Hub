import axios from 'axios';

const FETCH_ROCKETS = 'Space-Travellers-Hub/missions/FETCH_ROCKETS';
const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocketAction = (rocket) => ({
  type: FETCH_ROCKETS,
  payload: rocket,
});

export const fetchRockets = () => async (dispatch) => {
  const response = await axios.get(url);
  dispatch(fetchRocketAction(response.data));
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
