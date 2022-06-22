import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/exports';
import { fetchRockets } from '../redux/rockets/rockets';
import '../Rockets.css';

const Rockets = () => {
  const rocketData = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketData.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <div className="rockets">
      <div className="rocket-cards">
        {rocketData.map((rocket) => (
          <div className="rocket" key={rocket.id}>
            <img src={rocket.flickr_images} alt={rocket.rocket_name} className="rocket-img" />
            <div className="rocket-info">
              <h2>{rocket.rocket_name}</h2>
              <p>{rocket.description}</p>
              <button type="button">Reserve Rocket</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
