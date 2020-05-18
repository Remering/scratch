import axios from 'axios';
import account from './account';
import profile from './profile';
import file from './file';
import course from './course';
import question from './question';


export const client = axios.create({
  // baseURL: 'http://49.232.138.118:8080/plarform',
  baseURL: 'http://localhost:8888/plarform',
});

export default {
  ...account,
  ...profile,
  ...file,
  ...course,
  ...question
};
