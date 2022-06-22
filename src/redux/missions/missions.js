import axios from 'axios';

const FETCH_MISSIONS = 'Space-Travellers-Hub/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'Space-Travellers-Hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'Space-Travellers-Hub/missions/LEAVE_MISSION';
const url = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

export const joinMissionAction = (missionId) => ({
  type: JOIN_MISSION,
  payload: missionId,
});

export const leaveMissionAction = (missionId) => ({
  type: LEAVE_MISSION,
  payload: missionId,
});

export const fetchMissionAction = (mission) => ({
  type: FETCH_MISSIONS,
  payload: mission,
});

export const fetchMissions = () => async (dispatch) => {
  const response = await axios.get(url);
  dispatch(fetchMissionAction(response.data));
};

export const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    default:
      return state;
  }
};

export const Allmissions = (state) => state.missions;
