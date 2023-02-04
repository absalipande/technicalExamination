import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AuthComponent from './AuthComponent';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Account/SignIn' element={<LoginPage />} />
        <Route
          path='/'
          element={
            <AuthComponent>
              <HomePage />
            </AuthComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
