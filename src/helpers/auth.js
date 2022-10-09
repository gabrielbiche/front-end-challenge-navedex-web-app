import { ACCESS_TOKEN, REFRESH_TOKEN, TOKEN } from 'helpers';

export const getToken = () => localStorage.getItem(ACCESS_TOKEN);

export const clearToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(TOKEN);
};

export const setToken = token => localStorage.setItem(TOKEN, token);

export const setLoggedUser = user => localStorage.setItem('user', user);

export const clearLoggedUser = () => localStorage.removeItem('user');
