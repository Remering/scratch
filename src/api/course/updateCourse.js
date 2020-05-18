import {client} from '@/api';

/**
 *
 * @param token jwt
 * @param updateCourseInfo {uuid: string, name: string|null|undefined, introduction: string|null|undefined, picture: file|null|undefined, video: file|null|undefined, file:file|null|undefined}
 */
export default function updateCourse(token, {uuid, name, introduction, picture, video, file}) {
  const formData = new FormData();
  formData.set('uuid', uuid);
  name && formData.set('name', name);
  introduction && formData.set('introduction', introduction);
  picture && formData.set('picture', picture);
  video && formData.set('video', video);
  file && formData.set('file', file);
  return client.post('/teacher/updateCourse', formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}