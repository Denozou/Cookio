//import React from 'react'
import './ArticleTile.css';
import { Link } from 'react-router-dom';

// export default function ArticleTile() {
//   return (
//     // <Link to={`/article/${id}`} className="dish-tile__link"> 
//     //   <div className="dish-tile" onClick={''}>
//     //     <img src={image} alt={name} className="dish-tile__image" />
//     //     <div className="dish-tile__content">
//     //       <h3 className="dish-tile__name">{name}</h3>
//     //       <p className="dish-tile__description">{description}</p>
//     //       <p className="dish-tile__time">⏰ {time}</p>
//     //     </div>
//     //   </div>
//     // </Link>
//     <div>
//       </div>
//   )
// }
// eslint-disable-next-line react/prop-types
const ArticleTile = ({id, image, title, description}) => {
  return (
    <Link to={`/article/${id}`}>
        <div className='article-tile' >
          <img src={image} alt={title} className='article-tile__image'></img>
          <div className='article-tile__content'> 
            <h3 className='article-tile__title'>{title}</h3>
            <p className='article-tile__description'>{description}</p>
          </div>
        </div>
    </Link>
  );
}

export default ArticleTile;