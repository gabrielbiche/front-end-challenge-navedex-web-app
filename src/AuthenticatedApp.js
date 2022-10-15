import { Routes, Route, Navigate } from 'react-router-dom';

import { NaversList, NaverForm } from 'screens';

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path='/navers' element={<NaversList />} />
      <Route exact path='/navers/create' element={<NaverForm />} />
      <Route exact path='/navers/:id' element={<NaverForm />} />

      <Route path='*' element={<Navigate to='/navers' />} />
    </Routes>
  );
};

export default AuthenticatedApp;
