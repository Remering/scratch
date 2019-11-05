import api from '@/api';

const state = {
  courses: [],
};

const getters = {
  rows: ({courses}) => courses.size() / 4
};

const mutations = {
  setCourses: (state, courses) => state.courses = courses
};
const actions = {
  async fetchCourse({commit}) {
    const response = await api.displayCourse();
    const {message} = response.data;
    commit('setCourses', message);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};