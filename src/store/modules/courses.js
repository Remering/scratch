import api from '@/api';

const state = {
  courses: [
    {
      'name': 'Python',
      'uuid': 1
    },
    {
      'name': 'JAVA',
      'uuid': 2
    },
    {
      'name': 'C/C++',
      'uuid': 3
    },
    {
      'name': 'C++++',
      'uuid': 4
    },
    {
      'name': '测试课程',
      'uuid': 8
    },
    {
      'name': 'This is a title',
      'uuid': 9
    },
  ],
};

const getters = {
  rows: ({courses}) => Math.ceil(courses.length / 4)
};

const mutations = {
  setCourses: (state, courses) => state.courses = courses
};
const actions = {
  async fetchCourse({commit}) {
    const response = await api.displayCourse();
    const {message, code} = response.data;
    if (code) {
      commit('setCourses', message);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};