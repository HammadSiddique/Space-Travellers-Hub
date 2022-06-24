import axios from 'axios';

const FETCH_ROCKETS = 'Space-Travellers-Hub/missions/FETCH_ROCKETS';
const RESERVATIONS = 'Space-Travellers-Hub/missions/RESERVATIONS';
const CANCEL_RESERVATIONS = 'Space-Travellers-Hub/missions/CANCEL_RESERVATIONS';
const url = 'https://api.spacexdata.com/v3/rockets';

export const reservationAction = (rocketId) => ({
  type: RESERVATIONS,
  payload: rocketId,
});

export const cancelReservationAction = (rocketId) => ({
  type: CANCEL_RESERVATIONS,
  payload: rocketId,
});

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
    case RESERVATIONS:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    case CANCEL_RESERVATIONS:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export default rocketsReducer;
