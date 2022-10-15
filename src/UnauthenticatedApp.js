import { Routes, Route, Navigate } from 'react-router-dom';

import { Login } from 'screens';

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default UnauthenticatedApp;
