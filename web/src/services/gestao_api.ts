import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3333';

export const auth = axios.create({
  baseURL: URL + '/auth',
});
