import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await api.get(endpoint, options);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};

export const postData = async (endpoint, data, options = {}) => {
  try {
    const response = await api.post(endpoint, data, options);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};
