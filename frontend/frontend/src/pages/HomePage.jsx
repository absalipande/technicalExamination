import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import TerritoryCard from '../components/TerritoryCard';

export const AllTerritoriesContext = createContext();

const HomePage = () => {
  const [territories, setTerritories] = useState([]);

  useEffect(() => {
    const fetchTerritories = async () => {
      try {
        const response = await axios.get(
          'https://netzwelt-devtest.azurewebsites.net/Territories/All'
        );
        setTerritories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTerritories();
  }, []);

  return (
    <div>
      <AllTerritoriesContext.Provider value={territories}>
        {territories.map(territory => (
          <TerritoryCard key={territory.id} territory={territory} />
        ))}
      </AllTerritoriesContext.Provider>
    </div>
  );
};

export default HomePage;
