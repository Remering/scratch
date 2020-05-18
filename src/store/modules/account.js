import api from '@/api';
import {DEFAULT_AVATAR_URL, SNACKBAR_NAMESPACE, SUCCESS} from '@/global';
// import router from '@/plugins/vue-router';


const state = {
  username: '',
  uuid: '',
  avatarUrl: DEFAULT_AVATAR_URL,
  role: 0,
  email: '',
  token: '',
};

const getters = {
  loginStatus: ({token}) => !!token
};

const mutations = {
  setUsername: (state, username) => state.username = username,
  setAvatarUrl: (state, avatarUrl) => state.avatarUrl = avatarUrl || DEFAULT_AVATAR_URL,
  setRole: (state, role) => state.role = role,
  setEmail: (state, email) => state.email = email,
  setToken: (state, token) => state.token = token,
  setProfile(state, profile) {
    if (profile == null) {
      state.username = '';
      state.avatarUrl = DEFAULT_AVATAR_URL;
      state.role = 0;
      state.email = '';
      state.uuid = '';
      return;
    }
    const {username, avatarUrl, role, email, uuid} = profile;
    state.username = username;
    state.avatarUrl = avatarUrl || DEFAULT_AVATAR_URL;
    state.role = role;
    state.email = email;
    state.uuid = uuid;
  }
};

const actions = {
  async updateToken({commit}, token) {
    commit('setToken', token);
    await localStorage.setItem('scratch-jwt-token', token);
  },
  async fetchProfile({commit, state, dispatch}) {
    const {token} = state;
    const response = await api.getProfile(token);
    const {code, message, profile} = response.data;
    if (code !== SUCCESS) {
      dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
        code, message
      }, {
        root: true
      });
    }
    commit('setProfile', profile);

  },
  async updateProfile({state, dispatch, commit}, avatar) {
    const {token} = state;
    const response = await api.updateProfile(token, {avatar});
    const {code, message, profile} = response.data;
    dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
      code, message
    }, {
      root: true,
    });

    if (code === SUCCESS) {
      commit('setProfile', profile);
    }

  },
  async logout({state, dispatch, commit}, routeToRoot) {
    try {
      const {token} = state;
      const response = await api.logout(token);
      const {message, code} = response.data;
      dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
        message, code
      }, {
        root: true
      });
      if (code === SUCCESS) {
        commit('setProfile', null);
        commit('setToken', null);
        localStorage.removeItem('scratch-jwt-token');
        routeToRoot();
      }
    } catch (e) {
      dispatch(`${SNACKBAR_NAMESPACE}/showError`, e, {
        root: true,
      });
    }

  },
  async upload({dispatch}, file) {
    try {
      const response = await api.upload(file);
      const {message, code} = response.data;
      dispatch(`${SNACKBAR_NAMESPACE}/show${code ? 'Error' : 'Success'}`, message, {
        root: true,
      });
    } catch (e) {
      dispatch(`${SNACKBAR_NAMESPACE}/showError`, e, {
        root: true,
      });
    }
  },

};

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
};