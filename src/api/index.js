import axios from 'axios';
import login from '@/api/login';
import register from '@/api/register';
import user from '@/api/user';

export const client = axios.create({
  // baseURL: 'http://49.232.138.118:8080/plarform',
  baseURL: 'http://localhost:8080/plarform',
});

export default {
  ...login,
  ...register,
  ...user,
}
