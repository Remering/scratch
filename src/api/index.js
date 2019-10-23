import axios from 'axios';
import login from '@/api/login';
import register from '@/api/register';
export const client = axios.create({
  baseURL: 'http://49.232.138.118:8080/plarform',
});
export default {
  ...login,
  ...register,
}
