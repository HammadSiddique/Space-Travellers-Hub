import httpCommon from '../../http-common';

const getRockets = () => httpCommon.get('/rockets');

// Actions
const DISPLAY_ROCKETS = 'space-travellers-hub/rockets/DISPLAY_ROCKETS';

// Reducer

const RocketsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case DISPLAY_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

// Action Creators

export const fetchRockets = async (dispatch, getState) => {
  const initialRockets = getState().rockets;
  if (initialRockets.length === 0) {
    const { data } = await getRockets();
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
      reserved: false,
    }));
    dispatch({ type: DISPLAY_ROCKETS, payload: rockets });
  }
};

export default RocketsReducer;
