import api from '../../api'

const state = {
  username: "",
  email: "",
  password: "",
  verificationCode: ""
};

const mutations = {
  setUsername: (state, username) => state.username = username,
  setEmail: (state, email) => state.email = email,
  setPassword: (state, password) => state.password = password,
  setVerificationCode: (state, verificationCode) => state.verificationCode = verificationCode,
};

const actions = {
  async register({state, commit}) {
    try {
      const {code, message} = await api.register(state);
      if (code === 0) {
        commit('snackbar/open', {
          color: "error",
          message,
        });
      }
    } catch (e) {
      commit('snackbar/open', {
        color: "error",
        e,
      });
    }
  },
  async sendVerificationCode() {

  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
}