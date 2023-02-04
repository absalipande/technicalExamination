import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TerritoryComponent from '../components/TerritoryComponent';

// const HomePage = () => {
//   const [territories, setTerritories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openTerritories, setOpenTerritories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'http://localhost:3060/Territories/All'
//         );
//         console.log('Territories:', response.data);
//         setTerritories(Array.from(Object.values(response.data)));
//         console.log(territories)
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     console.log(territories);
//   }, [territories]);

//   const handleTerritoryClick = (id) => {
//     setOpenTerritories((prevOpenTerritories) => {
//       if (prevOpenTerritories.includes(id)) {
//         return prevOpenTerritories.filter((openId) => openId !== id);
//       } else {
//         return [...prevOpenTerritories, id];
//       }
//     });
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!territories || territories.length === 0) {
//     return <p>No territories found</p>;
//   }

//   return (
//     <div className='h-screen flex items-center justify-center'>
//       <div className='w-full max-w-xs bg-white p-6 rounded-lg shadow-md'>
//         <h1 className='text-xl font-bold text-center'>Territories</h1>
//         <p className='mt-2 text-center'>Here are the list of territories:</p>
//         <div className='mt-2'>
//           {territories
//             .filter((territory) => !territory.parent)
//             .map((territory, index) => (
//               <TerritoryComponent
//                 key={`${territory.id}-${index}`}
//                 territory={{
//                   ...territory,
//                   children: territories.filter(
//                     (child) => child.parent_id === territory.id
//                   ),
//                 }}
//                 onClick={handleTerritoryClick}
//                 open={openTerritories.includes(territory.id)}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//   );

// };

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
        setTerritories(Array.from(Object.values(response.data)));
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
    <div className='h-screen flex items-center justify-center'>
      <div className='w-full max-w-xs bg-white p-6 rounded-lg shadow-md'>
        <h1 className='text-xl font-bold text-center'>Territories</h1>
        <p className='mt-2 text-center'>Here are the list of territories:</p>
        <div className='mt-2'>
          {territories
            .filter((territory) => !territory.parent)
            .map((territory, index) => (
              <TerritoryComponent
                key={`${territory.id}-${index}`}
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
    </div>
  );
};

export default HomePage;
