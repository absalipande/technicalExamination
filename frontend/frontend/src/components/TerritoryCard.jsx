import React from 'react';

const TerritoryCard = ({ territory }) => {
  return (
    <div className='card'>
      <h2>{territory.name}</h2>
      <p>{territory.description}</p>
    </div>
  );
};

export default TerritoryCard;
