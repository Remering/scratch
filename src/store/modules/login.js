import api from '../../api/login'

const state = {
  username: null,
  password: null,
  loginStatus: false,
};

const getters = {
  loginStatus: ({loginStatus}) => loginStatus,
  username: ({username}) => username,
  userLoginInfo: ({username, password}) => ({username, password})
};

const mutations = {
  setUsername: (state, username) => state.username = username,
  setPassword: (state, password) => state.password = password,
  setLoginStatus: (state, loginStatus) => state.loginStatus = loginStatus,
};

const actions = {
  async login({commit, getters, state}) {
    // eslint-disable-next-line no-console
    console.log(state);
    const info = getters.userLoginInfo;
    try {
      const response = await api.login(info.username, info.password);
      // eslint-disable-next-line no-console
      console.log(response);
      commit('setLoginStatus', true);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

