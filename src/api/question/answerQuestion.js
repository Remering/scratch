import {client} from '@/api';

/**
 *
 * @param token
 * @param answerQuestionInfo {question: string, answer: string, answerAt: number}
 */
export default function answerQuestion(token, answerQuestionInfo) {
  return client.post('/question/answer', answerQuestionInfo, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}