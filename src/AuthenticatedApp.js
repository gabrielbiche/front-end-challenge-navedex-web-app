import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, AddNaver, EditNaver } from 'screens';

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path='*' element={<Navigate to='/home' />} />

      <Route path='/home' element={<Home />} />
      <Route path='/add-naver' element={<AddNaver />} />
      <Route path='/edit-naver' element={<EditNaver />} />
    </Routes>
  );
};

export default AuthenticatedApp;
