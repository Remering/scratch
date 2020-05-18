import {client} from '@/api';

export default async function getProfile(token) {
  return client.get('/user/getProfile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}