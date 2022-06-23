import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reservationAction, cancelReservationAction } from '../../redux/rockets/rockets';
import './Rockets.css';

const Rockets = () => {
  const rocketData = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketData.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  const toggleReservation = (rocket) => {
    if (rocket.reserved) {
      return dispatch(cancelReservationAction(rocket.id));
    }
    return dispatch(reservationAction(rocket.id));
  };

  return (
    <div className="rockets">
      <div className="rocket-cards">
        {rocketData.map((rocket) => (
          <div className="rocket" key={rocket.id}>
            <img src={rocket.flickr_images} alt={rocket.rocket_name} className="rocket-img" />
            <div className="rocket-info">
              <h2>{rocket.rocket_name}</h2>
              <p>{rocket.description}</p>
              <span>
                {rocket.reserved ? (<span className="reserved">Reserved</span>) : (<span />)}
              </span>
              <button
                onClick={() => toggleReservation(rocket)}
                type="button"
              >
                {rocket.reserved && 'Cancel Reservation'}
                {!rocket.reserved && 'Reserve Rocket'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
