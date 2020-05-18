import {client} from '@/api';

/**
 *
 * @param token jwt
 * @param updateProfileInfo {avatar: file}
 * @returns {Promise<void>}
 */
export default async function updateProfile(token, updateProfileInfo) {
  const {avatar} = updateProfileInfo;
  const formData = new FormData();
  formData.set('avatar', avatar);
  return client.post('/user/updateProfile', formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
