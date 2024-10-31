//import React from 'react'
import './TileGrid.css';
import Gin from "../assets/Gin.jpg";
import Top10 from "../assets/top-10-autumn-recipes.jpg";
import CookingAtHome from "../assets/Cooking-at-home.jpg";
import EatingWell from "../assets/Eating-well-as-you-age.jpg";
const tiles = [
    {
      id: 1,
      image: Gin,
      title: 'Why Gin is so Popular',
      textPosition: 'bottom-left',
    },
    {
      id: 2,
      image: Top10,
      title: 'Top 10 Autumn Recipes',
      textPosition: 'left',
    },
    {
      id: 3,
      image: CookingAtHome,
      title: 'Cooking at Home',
      textPosition: 'center',
    },
    {
      id: 4,
      image: EatingWell,
      title: 'Eating Well as You Age',
      textPosition: 'center',
    },
  ];

export default function TileGrid() {
  return (
    <div className="tile-grid">
      {tiles.map(tile => (
        <div
          key={tile.id}
          className={`tile ${tile.textPosition}`}
          style={{ backgroundImage: `url(${tile.image})` }}
        >
          <div className="tile-text">{tile.title}</div>
        </div>
      ))}
    </div>
  )
}
