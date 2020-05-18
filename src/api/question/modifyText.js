import {client} from '@/api';

/**
 *
 * @param token
 * @param modifyTextInfo {uuid: string, text: string, issueAt: number}
 */
export default function modifyText(token, modifyTextInfo) {
  return client.post('/question/modifyText', modifyTextInfo, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}