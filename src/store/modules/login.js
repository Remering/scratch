import api from '../../api';

const state = {
  userData: {
    username: "",
    password: "",
    loginStatus: false,
  },
  dialogState: {
    open: false,
  }
};

const mutations = {
  setUsername: (state, username) => state.userData = {...state.userData, username},
  setPassword: (state, password) => state.userData = {...state.userData, password},
  setLoginStatus: (state, loginStatus) => state.userData = {...state.userData, loginStatus},
  open: ({dialogState}) => dialogState.open = true,
  close: ({dialogState}) => dialogState.open = false,
};

const actions = {
  clear({commit}) {
    commit('setUsername', '');
    commit('setPassword', '');
  },
  async login({dispatch, commit, state}) {
    try {
      const response = await api.login(state);
      const {data, status, statusText} = response;
      const {message, code} = data;
      if (code) {
        dispatch('snackbar/showSuccess', '登录成功', {
          root: true,
        });
        commit('setLoginStatus', true);
      } else if (status === 200) {
        dispatch('snackbar/showError', message, {
          root: true,
        });
      } else {
        dispatch('snackbar/showError', `错误代码: ${status}`, {
          root: true,
        });
        // eslint-disable-next-line no-console
        console.log(statusText)
      }
    } catch (e) {
      dispatch('snackbar/showError', `未知错误: ${e}`, {
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

