import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import '../Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets);
  }, []);

  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="rockets">
      <div className="rocket-cards">
        {rockets && rockets.map((rocket) => (
          <div className="rocket" key={rocket.id}>
            <img src={rocket.flickr_images} alt={rocket.name} className="rocket-img" />
            <div className="rocket-info">
              <h2>{rocket.name}</h2>
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
