import axios from 'axios';
import { URL } from './urls';
// import {URL} from '@env';

const instance = axios.create({
  baseURL: URL,
  headers: {'Content-Type': 'application/json'},
  timeout: 30000,
});

instance.interceptors.response.use(
  res => res.data,
  error => Promise.reject(error?.response?.data),
);

const login = body => instance.post('/passwordless/start', body);

const otp = body => instance.post('/oauth/token', body);

const refresh_credentials = body => instance.post('/oauth/token', body);

const logout = body => instance.post('/oauth/revoke', body);

export default {login, otp, refresh_credentials, logout};
