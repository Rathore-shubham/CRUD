import axios from 'axios';

const API_BASE = import.meta.env.REACT_APP_API_BASE || 'http://localhost:5000/api';

const instance = axios.create({ baseURL: API_BASE });

instance.interceptors.request.use(config => {
  const t = localStorage.getItem('token');
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

export default instance;
