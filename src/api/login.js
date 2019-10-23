import { client } from './index';

export default {
  /**
   * Send login request to the server
   * @param userLoginInfo const { username: string, password: string } = userLoginInfo
   * @returns {Promise<AxiosResponse<T>>}
   */
  login: async (userLoginInfo) =>
    client.post('/user/login',
      userLoginInfo,
    ),

};