import {client} from '@/api';

export default async function getCourses() {
  return client.get('/teacher/getCourses');
}