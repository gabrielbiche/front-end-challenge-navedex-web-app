import { client } from 'providers';

export const login = (email, password) => client.post('/users/login', { email, password });
