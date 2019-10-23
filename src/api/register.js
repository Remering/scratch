import { client } from './index'

export default {
  /**
   * Send register request to the server
   * @param userRegisterInfo const { username: string, password: string, email: string, verificationCode } = userRegisterInfo
   * @returns {Promise<AxiosResponse<T>>}
   */
  async register(userRegisterInfo) {
    return client.post('/user/register', userRegisterInfo);
  },
  async sendVerificationCode(email) {
    return client.post('/user/sendVerificationCode', email);
  },
}