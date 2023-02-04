import React, { createContext, useEffect, useState } from 'react';
import DisplayAllTerritories from '../components/DisplayAllTerritories';

export const AllTerritoriesContext = createContext();

const HomePage = () => {
  const [territories, setTerritories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3060/Territories/All');
        const result = await response.json();
        setTerritories(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <AllTerritoriesContext>
        <DisplayAllTerritories />
      </AllTerritoriesContext>
    </div>
  );
};

export default HomePage;
