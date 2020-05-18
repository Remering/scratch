import api from '@/api';
import store from '@/store';
import {ACCOUNT_NAMESPACE, COURSES_NAMESPACE, SNACKBAR_NAMESPACE} from '@/global';

const state = {
  uuid: -1,
  name: '',
  introduction: '',
  picture: null,
  video: null,
  file: null,
  pictureUrl: '',
  videoUrl: '',
  fileUrl: ''
};


const getters = {
  course: ({uuid}) => store.getters[`${COURSES_NAMESPACE}/getByUUID`](uuid)
};

const mutations = {
  setUUID: (state, uuid) => state.uuid = uuid,
  setName: (state, name) => state.name = name,
  setIntroduction: (state, introduction) => state.introduction = introduction,
  setPicture: (state, picture) => {
    state.picture = picture;

    state.pictureUrl = picture ? window.URL.createObjectURL(picture) : '';

    // eslint-disable-next-line no-console
    console.log(state.pictureUrl);

  },
  setVideo: (state, video) => {
    state.video = video;
    state.videoUrl = video ? window.URL.createObjectURL(video) : '';
  },
  setFile: (state, file) => {
    state.file = file;
    state.fileUrl = file ? window.URL.createObjectURL(file) : '';
  },
  setPictureUrl: (state, pictureUrl) => state.pictureUrl = pictureUrl,
  setVideoUrl: (state, videoUrl) => state.videoUrl = videoUrl,
  setFileUrl: (state, fileUrl) => state.fileUrl = fileUrl,

};

const actions = {
  updateUUID({commit, getters}, uuid) {
    commit('setUUID', uuid);
    const {course} = getters;
    if (course == null) return null;
    commit('setName', course.name);
    commit('setIntroduction', course.introduction);
    commit('setPictureUrl', course.picture);
    commit('setVideoUrl', course.video);
    commit('setFileUrl', course.file);
    return course;
  },

  async updateCourse({state, dispatch, rootState}) {
    const {uuid, name, introduction, picture, video, file} = state;
    const {token} = rootState[ACCOUNT_NAMESPACE];
    const response = await api.updateCourse(token, {
      uuid, name, introduction, picture, video, file
    });
    const {code, message} = response.data;
    await dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
      code, message
    }, {
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