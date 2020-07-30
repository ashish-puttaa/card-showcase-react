import React from 'react';
import './card.styles.css';

export default function Card({ title, image }) {
   return (
      <div className="card-wrapper">
         <div className="card">
            <div className="card-image-wrapper">
               <img className="card-image" src={image} alt="" />
            </div>
            <p className="card-text">
               Photo by <b>{title}</b> on Unsplash
            </p>
         </div>
      </div>
   );
}
