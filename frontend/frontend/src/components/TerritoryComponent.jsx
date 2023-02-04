import React, { useState } from 'react';

const TerritoryComponent = ({ territory, onClick, open }) => {
  return (
    <div className='mb-4'>
      <div
        className='cursor-pointer flex items-center text-gray-800 hover:text-gray-600'
        onClick={() => onClick(territory.id)}
      >
        <i className={`fas fa-chevron-${open ? 'down' : 'right'} mr-2`}></i>
        <span className='font-medium'>
          {territory.name ? territory.name : 'No Name'}
        </span>
      </div>
      {open && territory.children && (
        <ul className='ml-4'>
          {territory.children.map((child, index) => (
            <li key={child.id + index}>
              <TerritoryComponent
                territory={child}
                onClick={onClick}
                open={open.includes(child.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TerritoryComponent;
