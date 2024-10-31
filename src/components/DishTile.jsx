//import React from 'react';
import './DishTile.css';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const DishTile = ({ id, image, name, description, time }) => {
  return (
    <Link to={`/dish/${id}`} className="dish-tile__link"> 
      <div className="dish-tile" onClick={''}>
        <img src={image} alt={name} className="dish-tile__image" />
        <div className="dish-tile__content">
          <h3 className="dish-tile__name">{name}</h3>
          <p className="dish-tile__description">{description}</p>
          <p className="dish-tile__time">⏰ {time}</p>
        </div>
      </div>
    </Link>

  );
};

export default DishTile;
