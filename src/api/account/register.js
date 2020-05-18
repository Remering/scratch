import {client} from '../index';


export default async function register(userRegisterInfo) {
  return client.post('/user/register', userRegisterInfo);
}

