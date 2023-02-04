import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TerritoryComponent from '../components/TerritoryComponent';

const HomePage = () => {
  const [territories, setTerritories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openTerritories, setOpenTerritories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3060/Territories/All'
        );
        console.log(response.data);
        setTerritories(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
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

  if (territories.length === 0) {
    return <p>No territories found</p>;
  }

  return (
    <div className='bg-gray-200 p-6'>
      <h1 className='text-xl font-bold'>Territories</h1>
      <p className='mt-2'>Here are the list of territories:</p>
      <div className='mt-2'>
        {console.log(territories)}
        {territories.length ? (
          territories
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
            ))
        ) : (
          <p>No territories found</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
