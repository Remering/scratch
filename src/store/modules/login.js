import api from '../../api';

const state = {
  username: "",
  password: "",
  loginStatus: false,
};

const mutations = {
  setUsername: (state, username) => state.username = username,
  setPassword: (state, password) => state.password = password,
  setLoginStatus: (state, loginStatus) => state.loginStatus = loginStatus,
};

const actions = {
  async login({commit, state}) {
    try {
      const response = await api.login(state);
      const {message, code} = response.data;
      if (code === 0) {
        commit('snackbar/open', {
          color: "error",
          message,
        }, {
          root: true
        })
      }
      // eslint-disable-next-line no-console
      console.log(response);
      commit('setLoginStatus', true);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      commit('snackbar/open', {
        color: "error",
        message: e,
      }, {
        root: true
      })
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

