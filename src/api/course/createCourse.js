import {client} from '@/api';

/**
 *
 * @param token
 * @param createCourseInfo {name: string, introduction: string, picture: file, video: file, file: file}
 * @returns {Promise<void>}
 */
export default async function createCourse(token, {name, introduction, picture, video, file}) {
  const formData = new FormData();
  formData.set('name', name);
  formData.set('introduction', introduction);
  formData.set('picture', picture);
  formData.set('video', video,);
  formData.set('file', file);
  return client.post('/teacher/createCourse', formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}