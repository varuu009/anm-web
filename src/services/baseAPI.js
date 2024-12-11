import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://ec2-65-0-85-78.ap-south-1.compute.amazonaws.com:8083/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const searchURL="api/ina-ams-event/search"

export default apiInstance;
