import api from '@/api';


const state = {
  userData: {
    username: '',
    password: '',
  },
  dialogState: {
    open: false,
  }
};

const mutations = {
  setUsername: (state, username) => state.userData = {...state.userData, username: username},
  setPassword: (state, password) => state.userData = {...state.userData, password: password},
  setLoginStatus: (state, loginStatus) => state.dialogState = {...state.dialogState, loginStatus},
  setAvatarUrl: (state, avatarUrl) => state.dialogState = {...state.dialogState, avatarUrl},
  open: ({dialogState}) => dialogState.open = true,
  close({dialogState, userData}) {
    dialogState.open = false;
    userData.username = '';
    userData.password = '';
  },
};

const actions = {
  async login({dispatch, commit, state}) {
    try {
      const response = await api.login(state.userData);
      const {data, status} = response;
      const {message, code} = data;
      if (code) {
        dispatch('snackbar/showSuccess', '登录成功', {
          root: true,
        });

        commit('user/setLoginStatus', true, {
          root: true,
        });
        commit('user/setUsername', state.userData.username, {
          root: true,
        });
      } else if (status === 200) {
        dispatch('snackbar/showError', message, {
          root: true,
        });
      } else {
        dispatch('snackbar/showError', `错误代码: ${status}`, {
          root: true,
        });
      }
    } catch (e) {
      dispatch('snackbar/showError', e, {
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

