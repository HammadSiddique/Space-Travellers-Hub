import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <section className="profile-container">
      <div className="my-missions">
        <h2>My Missions</h2>
        <table className="profile-table" border={1} cellSpacing={0}>
          <tbody>
            {reservedMissions.map((mission) => (
              <tr key={mission.mission_id}><td>{mission.mission_name}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="my-rockets">
        <h2>My Rockets</h2>
        <table className="profile-table" border={1} cellSpacing={0}>
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id}><td>{rocket.rocket_name}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Profile;
