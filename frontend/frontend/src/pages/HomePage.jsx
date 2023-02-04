import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3060/Territories/All');
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
