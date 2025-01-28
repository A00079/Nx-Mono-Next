// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  get: (url: any, params = {}, config = {}) => {
    return axiosInstance.get(url, { params, ...config });
  },
  post: (url: any, data = {}, config = {}) => {
    return axiosInstance.post(url, data, { ...config });
  },
  put: (url: any, data = {}, config = {}) => {
    return axiosInstance.put(url, data, { ...config });
  },
  patch: (url: any, data = {}, config = {}) => {
    return axiosInstance.patch(url, data, { ...config });
  },
  delete: (url: any, config = {}) => {
    return axiosInstance.delete(url, { ...config });
  },
};

export default api;
