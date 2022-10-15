import { client } from 'providers';

export const getUser = () => client.get('/v1/me');

export const login = data => client.post('/v1/users/login', data);
