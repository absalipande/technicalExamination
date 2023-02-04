import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthComponent = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/Account/SignIn');
    }
  }, [navigate]);

  return <div>{props.children}</div>;
};

export default AuthComponent;
