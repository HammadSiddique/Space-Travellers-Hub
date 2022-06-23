import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/exports';
import { fetchMissions, leaveMissionAction, joinMissionAction } from '../redux/missions/missions';
import '../Missions.css';

const Missions = () => {
  const missionData = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionData.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  const toggleReservation = (mission) => {
    if (mission.reserved) {
      return dispatch(leaveMissionAction(mission.mission_id));
    }
    return dispatch(joinMissionAction(mission.mission_id));
  };
  const tblHeaders = ['Mission', 'Discription', 'Status', 'Action'];
  return (
    <div>
      <table className="table" border={1} cellSpacing={0}>
        <thead>
          <tr>
            {tblHeaders.map((e) => <th key={e}>{e}</th>)}
          </tr>
        </thead>
        <tbody className="table-body">
          {missionData.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.reserved ? (<span className="member">Active Member</span>) : (<span className="not-member">NOT A MEMBER</span>)}
              </td>
              <td>
                <button
                  className={mission.reserved ? 'leave-btn' : 'join-btn'}
                  onClick={() => toggleReservation(mission)}
                  type="button"
                >
                  {mission.reserved && 'Leave Mission'}
                  {!mission.reserved && 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
