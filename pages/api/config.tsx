import axios from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";


export const API_URL = 'https://snapx1.herokuapp.com/api';
export const API_SITE = 'https://snapx-sifonyarya.vercel.app';
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})
$api.interceptors.request.use((config:any) => {
   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
   return config
})
$api.interceptors.response.use((response) => {
  return response;
},async (error) => {
  const originalRequest = error.response;
  if (error.response.status == 403 && error.response && !error.response._isRetry) {
      originalRequest._isRetry = true;
      try {
          const response = await axios.get<AuthResponse>(API_URL + `/auth/refresh`, {withCredentials: true})
          localStorage.setItem('token', response.data.accessToken);
          return $api.request(originalRequest);
      } catch (e) {
          console.log('НЕ АВТОРИЗОВАН')
      }
  }
  throw error;
})
export default $api;