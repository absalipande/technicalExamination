import React, { useContext } from 'react';
import LogoutButtonComponent from './LogoutButtonComponent';
import { AllTerritoriesContext } from '../pages/HomePage';

const DisplayAllTerritories = () => {
  const data = useContext(AllTerritoriesContext);

  const renderTerritories = (territories) => {
    return territories.map((territory) => {
      return (
        <MainTerritory
          key={territory.id}
          name={territory.name}
          parent={territory.parent}
          data={data}
        />
      );
    });
  };

  return (
    <>
      <div>
        <section>
          <h2>All TERRITORIES</h2>
          <p>List of territories</p>
        </section>
        <ul>{renderTerritories(data)}</ul>
      </div>
      <LogoutButtonComponent />
    </>
  );
};

export default DisplayAllTerritories;
