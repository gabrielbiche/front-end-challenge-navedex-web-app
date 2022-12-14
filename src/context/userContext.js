import { createContext, useContext, useEffect, useState } from 'react';

import { login as loginService, getUser } from 'services';
import { client } from 'providers';
import { setToken, getToken, clearToken } from 'helpers';

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

  useEffect(() => {
    const fetchUser = async () => {
      const token = getToken();
      try {
        if (token) {
          client.defaults.headers.Authorization = `Bearer ${token}`;
          const { data } = await getUser();
          return setUser(data);
        }
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchUser();
  }, []);

  const loginContext = async (email, password) => {
    const { data } = await loginService(email, password);
    const loggedUser = { id: data.id, email: data.email };
    const token = data.token;

    setUser(loggedUser);
    setToken(token);

    client.defaults.headers.Authorization = `Bearer ${token}`;
  };

  const logout = () => {
    clearToken();
    setUser(null);
  };

  return <UserContext.Provider value={{ user, loginContext, logout }} {...props} />;
};

export { useUser, UserProvider };
