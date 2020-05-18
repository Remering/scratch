import {client} from '../index';


/**
 * Send login request to the server
 * @param userLoginInfo const { account: string, password: string } = userLoginInfo
 * @returns {Promise<AxiosResponse<T>>}
 */
export default async function login(userLoginInfo) {
  return client.post('/user/login', userLoginInfo, {
    withCredentials: true,
  });
}
