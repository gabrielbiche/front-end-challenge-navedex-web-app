import { createContext, useCallback, useContext, useState } from 'react';
//import { useQuery, useQueryClient } from 'react-query';

import { login as loginService } from 'services';
import { setLoggedUser, setToken, clearToken, clearLoggedUser } from 'helpers';
import { client } from 'providers';

const UserContext = createContext();

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

const UserProvider = props => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const { data } = await loginService(email, password);

    const loggedUser = {
      id: data.id,
      email: data.email
    };
    const token = data.token;

    setUser(loggedUser);
    setLoggedUser(JSON.stringify(loggedUser));
    setToken(token);

    client.defaults.headers.Authorization = `Bearer ${token}`;
  };

  const logout = useCallback(() => {
    clearToken();
    setUser(null);
    clearLoggedUser();
    
    client.defaults.headers.Authorization = null;
  }, [user]);

  return <UserContext.Provider value={{ user, login, logout }} {...props} />;
};

export { useUser, UserProvider };
