import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButtonComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/Account/SignIn');
  };

  return (
    <div className='flex justify-end'>
      <button
        onClick={handleLogout}
        className='bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg shadow-teal-500/50 hover:shadow-teal-500/40'
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButtonComponent;
