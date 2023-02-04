import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import AuthComponent from './AuthComponent';

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path='/Account/SignIn' element={<LoginPage />} />
    </Routes>
    ;
  </BrowserRouter>;
};

export default App;
