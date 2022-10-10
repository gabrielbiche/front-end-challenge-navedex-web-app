import { client } from 'providers';

export const getMe = () => client.get('/v1/me');

export const login = (email, password) => client.post('/users/login', { email, password });
