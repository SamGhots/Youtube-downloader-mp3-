import React from 'react';
import './offer.css';

const Offer = ({ coverImageUrl, title }) => {
  return (
    <div className="offer">
      <img
        src={coverImageUrl}
        alt="Offer Cover"
        className="coverImage"
      />
      <p className="title">{title}</p>
    </div>
  );
};

export default Offer;
