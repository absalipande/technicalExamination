import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogoutButtonComponent from '../components/LogoutButtonComponent';

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
        console.log('Territories:', response.data);
        setTerritories(createTerritoryTree(response.data.territories.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const createTerritoryTree = (territories) => {
    const territoriesMap = {};
    territories.forEach((territory) => {
      territoriesMap[territory.id] = territory;
      territory.children = [];
    });

    const root = [];
    territories.forEach((territory) => {
      if (territory.parent) {
        territoriesMap[territory.parent].children.push(territory);
      } else {
        root.push(territory);
      }
    });
    return root;
  };

  const handleTerritoryClick = (id) => {
    setOpenTerritories((prevOpenTerritories) => {
      if (prevOpenTerritories.includes(id)) {
        return prevOpenTerritories.filter((openId) => openId !== id);
      } else {
        return [...prevOpenTerritories, id];
      }
    });
  };

  const renderTerritory = (territory) => {
    return (
      <div key={territory.id}>
        <div
          className='cursor-pointer flex items-center p-2 hover:bg-gray-100'
          onClick={() => handleTerritoryClick(territory.id)}
        >
          <i
            className={`fas fa-chevron-${
              openTerritories.includes(territory.id) ? 'down' : 'right'
            } mr-2`}
          ></i>
          <span className='font-xl'>
            {territory.name ? territory.name : 'No Name'}
          </span>
        </div>
        {openTerritories.includes(territory.id) && (
          <div className='ml-4'>
            {territory.children.map((child) => renderTerritory(child))}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return <div className='p-4'>Loading...</div>;
  }

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <div className='w-64 p-4 bg-white rounded shadow'>
        <h2 className='text-2xl mb-4 text-center'>Territories</h2>
        {territories.map((territory) => renderTerritory(territory))}
        <LogoutButtonComponent />
      </div>
    </div>
  );
};

export default HomePage;
