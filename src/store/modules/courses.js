import api from '@/api';
import {SNACKBAR_NAMESPACE, SUCCESS} from '@/global';

const state = {
  courses: {}
};

const getters = {
  array: ({courses}) => courses ? Object.values(courses) : [],
  length: (_, {array}) => array.length,
  get: (_, {array}) => (index) => array[index],
  getByUUID: ({courses}) => (uuid) => courses[uuid],
};

const mutations = {
  setCourses: (state, courses) => state.courses = courses
};
const actions = {
  async fetchCourse({commit, dispatch}) {
    const response = await api.getCourses();
    const {message, code, courses} = response.data;
    if (code !== SUCCESS) {
      dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
        code, message
      }, {
        root: true
      });
      return;
    }
    commit('setCourses', courses);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};