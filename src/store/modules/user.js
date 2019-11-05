import AvatarDefault from '@/assets/avatar_default.jpg';
import api from '@/api';
import {SNACKBAR_NAMESPACE} from '@/store';

const DEFAULT_AVATAR_URL = AvatarDefault;

const state = {
  // username: '',
  username: 'Remering',
  avatarUrl: DEFAULT_AVATAR_URL,
  // role: 0,
  role: 1,
  // loginStatus: false,
  loginStatus: true,

  // email: '',
  email: '1015488424@qq.com',
};

const mutations = {
  setUsername: (state, username) => state.username = username,
  setAvatarUrl: (state, avatarUrl) => state.avatarUrl = avatarUrl || DEFAULT_AVATAR_URL,
  setRole: (state, role) => state.role = role,
  setLoginStatus: (state, loginStatus) => state.loginStatus = loginStatus,
  setEmail: (state, email) => state.email = email,
};

const actions = {
  async fetchProfile({commit}) {
    const response = await api.getUserProfile();
    const {data, status} = response;
    if (status === 401) {
      commit('setLoginStatus', false);
      global.$cookies.keys().forEach(key => global.$cookies.remove(key));
      return;
    }
    const {userName, passWord, email, avatarUrl, role} = data;
    commit('setUsername', userName);
    commit('setPassword', passWord);
    commit('setEmail', email);
    commit('setAvatarUrl', avatarUrl);
    commit('setRole', role);
  },
  async updateProfile({state}) {
    const {username, email, role, avatarUrl} = state;
    await api.updateUserProfile({
      userName: username,
      email,
      avatarUrl,
      role,
    });
  },
  async logout({commit, dispatch}) {
    try {
      const response = await api.logout();
      const {message, code} = response.data;
      commit('setLoginStatus', false);
      dispatch(`${SNACKBAR_NAMESPACE}/show${code ? 'Error' : 'Success'}`, message, {
        root: true,
      });
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
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};