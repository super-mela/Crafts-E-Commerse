import axios from "axios";

const defaultOptions = {
  baseURL: process.env.REACT_APP_API_PATH,
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};

const fileOptions = {
  baseURL: process.env.REACT_APP_API_PATH,
  headers: {
    "Content-Type": "multipart/form-data"
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};

// Create instance
const instance = axios.create(defaultOptions);
const fileinstace = axios.create(fileOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

fileinstace.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;
export { fileinstace };
