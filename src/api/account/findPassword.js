import {client} from '@/api';


/**
 *
 * @param findPasswordInfo: {email: string, veriCode: String, newPassword, newPasswordConfirm}
 * @returns {Promise<AxiosResponse<T>>}
 */
export default async function findPassword(findPasswordInfo) {
  return client.post('', findPasswordInfo);
}
