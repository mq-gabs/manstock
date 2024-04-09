import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export * from './products';
export * from './auth';
export * from './payment-types';
export * from './purchase';
export * from './users';