import {client} from '@/api';

export default async function logout(token) {
  return client.get('/user/logout', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
