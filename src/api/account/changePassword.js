import {client} from '@/api';


/**
 *
 * @param token jwt
 * @param changePasswordInfo {oldPassword: string, newPassword: string, newPasswordConfirm: string}
 * @returns {Promise<AxiosResponse<T>>}
 */
export default async function changePassword(token, changePasswordInfo) {
  return client.post('/profile/changePassword', changePasswordInfo, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
