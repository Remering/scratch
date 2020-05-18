import {client} from '@/api';

/**
 *
 * @param token
 * @param deleteQuestion {uuid: string}
 */
export default function deleteQuestion(token, deleteQuestionInfo) {
  return client.post('/question/delete', deleteQuestionInfo, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}