import api from '@/api';
import {SNACKBAR_NAMESPACE} from '@/store';

const state = {
  courseId: -1,
  name: '',
  introduction: '',
  picture: null,
  video: null,
};


const getters = {
  pictureUrl: ({picture}) => picture ? window.URL.createObjectURL(picture) : '',
  videoUrl: ({video}) => video ? window.URL.createObjectURL(video) : '',
};

const mutations = {
  setCourseId: (state, courseId) => state.courseId = courseId,
  setName: (state, name) => state.name = name,
  setIntroduction: (state, introduction) => state.introduction = introduction,
  setPicture: (state, picture) => state.picture = picture,
  setVideo: (state, video) => state.video = video,
};

const actions = {
  async createCourse({state, dispatch, commit}) {
    const {name, picture, introduction} = state;
    const response = await api.createCourse({
      name,
      picture,
      introduction,
    });
    let {code, message} = response.data;
    await dispatch(`${SNACKBAR_NAMESPACE}/show${code ? 'Error' : 'Success'}`, message, {
      root: true,
    });
    if (!code) return;
    const coursesResponse = await api.displayCourse();
    message = coursesResponse.data.message;
    const course = message.filter(item => item.name === name).first;
    if (!course) return;
    commit('setCourseId', course.uuid);
  },
  async uploadCourse({state, dispatch}) {
    const {courseId, name, picture, video} = state;
    const response = await api.uploadCourse({
      courseId, name, picture, video,
    });
    const {code, message} = response.data;
    await dispatch(`${SNACKBAR_NAMESPACE}/show${code ? 'Error' : 'Success'}`, message, {
      root: true,
    });
  },
  async createAndUpload({dispatch}) {
    await dispatch('createCourse');
    await dispatch('uploadCourse');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};