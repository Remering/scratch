import {client} from '@/api';

/**
 *
 * @param token
 * @param addQuestionInfo {course: string, text: string, issueAt: number}
 */
export default function addQuestion(token, addQuestionInfo) {
  return client.post('/question/add', addQuestionInfo, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}