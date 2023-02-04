import React, { useState } from 'react';

const TerritoryComponent = ({ territory, onClick, open }) => {
  return (
    <div className='mt-4'>
      <div
        className='cursor-pointer flex items-center'
        onClick={() => onClick(territory.id)}
      >
        <span className={`${open ? '-rotate-90' : ''} mr-2`}>
          {open ? '▼' : '►'}
        </span>
        <span>{territory.name}</span>
      </div>
      {open && territory.children && (
        <ul className='ml-4'>
          {territory.children.map((child, index) => (
            <li key={child.id + index}>
              <TerritoryComponent
                territory={child}
                onClick={onClick}
                open={false}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default TerritoryComponent;
