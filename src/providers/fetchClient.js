import axios from 'axios';

const options = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
};

const provider = axios.create(options);

export default provider;
