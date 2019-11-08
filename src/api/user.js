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
    return client.get('/logout', {
      withCredentials: true,
    });
  },
  async upload(file) {
    const formData = new FormData();
    formData.append('file', file);
    return client.post('/user/uploadAVATARURL', formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  },
  async createCourse(createCourseInfo) {
    const formData = new FormData();
    for (let k in createCourseInfo) {
      if (createCourseInfo.hasOwnProperty(k))
        formData.append(k, createCourseInfo[k]);
    }
    return client.post('/teacher/createCourse', formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  async displayCourse() {
    return client.get('/teacher/displayCourse');
  },
  async uploadCourse(uploadCourseInfo) {
    const {courseId, name, picture, video} = uploadCourseInfo;
    const formData = new FormData();

    formData.append('picture', picture);
    formData.append('video', video);
    return client.post(`/teacher/upload/${courseId}/${name}`, {
      formData,
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
