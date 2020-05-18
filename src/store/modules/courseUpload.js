import api from '@/api';
import {ACCOUNT_NAMESPACE, COURSES_NAMESPACE, SNACKBAR_NAMESPACE} from '@/global';

const state = {
  courseId: -1,
  name: '',
  introduction: '',
  picture: null,
  video: null,
  file: null
};


const getters = {
  pictureUrl: ({picture}) => picture ? window.URL.createObjectURL(picture) : '',
  videoUrl: ({video}) => video ? window.URL.createObjectURL(video) : '',
  fileUrl: ({file}) => file ? window.URL.createObjectURL(file) : '',
};

const mutations = {
  setCourseId: (state, courseId) => state.courseId = courseId,
  setName: (state, name) => state.name = name,
  setIntroduction: (state, introduction) => state.introduction = introduction,
  setPicture: (state, picture) => state.picture = picture,
  setVideo: (state, video) => state.video = video,
  setFile: (state, file) => state.file = file,
};

const actions = {
  async createCourse({state, dispatch, commit, rootState}) {
    const {token} = rootState[ACCOUNT_NAMESPACE];
    const {name, picture, introduction, video, file} = state;

    const response = await api.createCourse(token, {
      name,
      introduction,
      picture,
      video,
      file
    });
    let {code, message} = response.data;
    await dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
      code, message
    }, {
      root: true,
    });
    if (!code) return;
    const coursesResponse = await api.getCourses();
    message = coursesResponse.data.message;
    if (typeof message == 'string') return;
    const course = message.filter(item => item.name === name).first;
    if (!course) return;
    commit('setCourseId', course.uuid);
  },
  async uploadCourse({state, dispatch}) {
    const {courseId, name, picture, video} = state;
    const response = await api.uploadCourse({
      courseId, name, picture, video,
    });
    // eslint-disable-next-line no-console
    console.log(response);
    const {code, message} = response.data;
    await dispatch(`${SNACKBAR_NAMESPACE}/show${code ? 'Success' : 'Error'}`, message, {
      root: true,
    });
    dispatch(`${COURSES_NAMESPACE}/fetchCourse`, null, {
      root: true,
    });
  },

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};