import api from '../../api'

const state = {
  userData: {
    username: '',
    email: '',
    password: '',
    verificationCode: '',
  },
  dialogState: {
    open: false,
    repeatedPassword: '',
  }
};

const mutations = {
  setUsername: (state, username) => state.userData = {...state.userData, username},
  setPassword: (state, password) => state.userData = {...state.userData, password},
  setEmail: (state, email) => state.userData = {...state.userData, email},
  setVerificationCode: (state, verificationCode) => state.userData = {...state.userData, verificationCode},
  setRepeatedPassword: (state, repeatedPassword) => state.dialogState = {...state.dialogState, repeatedPassword},
  close: ({dialogState}) => dialogState.open = false,
  open: ({dialogState}) => dialogState.open = true,
};


const actions = {
  clear({commit}) {
    commit('setUsername', '');
    commit('setEmail', '');
    commit('setPassword', '');
    commit('setVerificationCode', '');
  },
  async register({state, dispatch}) {
    try {
      const {code, message} = await api.register(state);
      if (code === 0) {
        dispatch('snackbar/showError', message, {
          root: true,
        });
      } else {
        await dispatch('snackbar/showSuccess', '注册成功', {
          root: true,
        });

      }
    } catch (e) {
      dispatch('snackbar/showError', e, {
        root: true,
      });
    }
  },
  async sendVerificationCode({state}) {
    try {
      const respone = await api.sendVerificationCode(state.email)
      // eslint-disable-next-line no-console
      console.log(respone)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
}