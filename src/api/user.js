import {client} from '@/api/index';

export default {
  async getUserProfile() {
    return client.get('/user/getUserProfile', {
      withCredentials: true,
    });
  },
  async updateUserProfile(userProfile) {
    return client.post('/user/updateUserProfile', userProfile, {
      withCredentials: true,
    });
  },

  async logout() {
    return client.get('/user/logout', {
      withCredentials: true,
    });
  },
  async upload(file) {
    return client.post('/user/upload', file, {
      withCredentials: true,
    });
  },
  async createCourse(createCourseInfo) {
    return client.post('/teacher/createCourse', createCourseInfo, {
      withCredentials: true,
    });
  },
  async displayCourse() {
    return client.get('/teacher/displayCourse');
  },
  async uploadCourse(uploadCourseInfo) {
    const {courseId, name, picture, video} = uploadCourseInfo;
    return client.post(`/teacher/upload/${courseId}/${name}`, {
      picture, video,
    }, {
      withCredentials: true,
    });
  },
};
