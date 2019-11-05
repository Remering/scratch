import {client} from './index';

export default {
  /**
   * Send register request to the server
   * @param userRegisterInfo const { username: String, password: String, email: String, role: number, verificationCode: String } = userRegisterInfo
   * @returns {Promise<AxiosResponse<T>>}
   */
  async register({username, password, email, role, verificationCode}) {
    return client.post('/user/register', {
      userName: username,
      passWord: password,
      email,
      role,
      verificationCode,
    });
  },
  async sendVerificationCode(email) {
    return client.post('/user/email', {
      email
    });
  },
}