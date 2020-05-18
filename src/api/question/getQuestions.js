import {client} from '@/api';

/**
 *
 * @param token
 * @param deleteQuestion {course: string}
 */
export default function getQuestions(getQuestionsInfo) {
  return client.post('/question/get', getQuestionsInfo);
}