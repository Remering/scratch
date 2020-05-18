import {client} from '@/api';

export default async function sendVerificationCode(email) {
  return client.post('/user/sendVerificationCode', {
    email
  });
}