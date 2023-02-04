import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TerritoryComponent from '../components/TerritoryComponent';

const HomePage = () => {
  const [territories, setTerritories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openTerritories, setOpenTerritories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3060/Territories/All'
        );
        setTerritories(Object.values(response.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleTerritoryClick = (id) => {
    setOpenTerritories((prevOpenTerritories) => {
      if (prevOpenTerritories.includes(id)) {
        return prevOpenTerritories.filter((openId) => openId !== id);
      } else {
        return [...prevOpenTerritories, id];
      }
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!territories || territories.length === 0) {
    return <p>No territories found</p>;
  }

  return (
    <div className='bg-gray-200 p-6'>
      <h1 className='text-xl font-bold'>Territories</h1>
      <p className='mt-2'>Here are the list of territories:</p>
      <div className='mt-2'>
        {territories
          .filter((territory) => !territory.parent_id)
          .map((territory) => (
            <TerritoryComponent
              key={territory.id}
              territory={{
                ...territory,
                children: territories.filter(
                  (child) => child.parent_id === territory.id
                ),
              }}
              onClick={handleTerritoryClick}
              open={openTerritories.includes(territory.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
