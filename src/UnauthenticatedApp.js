import { Routes, Route, Navigate } from 'react-router-dom';

import { Login } from 'screens';

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route path='*' element={<Navigate to='/login' />} />

      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default UnauthenticatedApp;
