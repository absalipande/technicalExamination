import React from 'react';

const TerritoryComponent = ({ territory, onClick, open }) => {
  return (
    <div className='flex flex-col'>
      <div
        className='text-lg cursor-pointer'
        onClick={() => onClick(territory.id)}
      >
        {open ? '▼' : '►'} {territory.name}
      </div>
      {open && (
        <div className='ml-4'>
          {territory.children.map((child) => (
            <TerritoryComponent
              key={child.id}
              territory={child}
              onClick={onClick}
              open={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TerritoryComponent;
