import { client } from 'providers';
import { formatDateFromApi } from 'helpers';

export const getNavers = async () => {
  try {
    const { data } = await client.get('/v1/navers');
    return data;
  } catch (error) {
    return console.log(`Error ${error}`);
  }
};

export const createNaver = async data => {
  try {
    await client.post('/v1/navers', data);
    return true;
  } catch (error) {
    console.log(`Error ${error}`);
    return false;
  }
};

export const updateNaver = async ({ id, ...data }) => {
  try {
    await client.put(`/v1/navers/${id}`, data);
    return true;
  } catch (error) {
    console.log(`Error ${error}`);
    return false;
  }
};

export const removeNaver = async id => {
  try {
    await client.delete(`/v1/navers/${id}`);
    return true;
  } catch (error) {
    console.log(`Error ${error}`);
    return false;
  }
};

export const getNaver = params => {
  if (typeof params === 'string') {
    const id = params;
    return getNaverById(id);
  } else {
    const { queryKey } = params;
    const id = queryKey[1];
    return getNaverById(id);
  }
};

const getNaverById = async id => {
  try {
    const { data } = await client.get(`/v1/navers/${id}`);
    return {
      ...data,
      birthdate: formatDateFromApi(data.birthdate),
      admission_date: formatDateFromApi(data.admission_date)
    };
  } catch (error) {
    return console.log(`Error ${error}`);
  }
};
