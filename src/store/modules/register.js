import api from '../../api';

const state = {
  userData: {
    username: '',
    email: '',
    password: '',
    verificationCode: '',
    role: '',
  },
  dialogState: {
    open: false,
    repeatedPassword: '',
    roleTypes: [
      '学生', '老师',
    ],
  }
};

const getters = {
  roleString: ({dialogState, userData}) => dialogState.roleTypes[userData.role],
};

const mutations = {
  setUsername: (state, username) => state.userData = {...state.userData, username: username},
  setPassword: (state, password) => state.userData = {...state.userData, password: password},
  setEmail: (state, email) => state.userData = {...state.userData, email},
  setVerificationCode: (state, verificationCode) => state.userData = {...state.userData, verificationCode},
  setRepeatedPassword: (state, repeatedPassword) => state.dialogState = {...state.dialogState, repeatedPassword},
  setRoleString: ({userData, dialogState}, newRoleString) => userData.role = dialogState.roleTypes.indexOf(newRoleString),
  open: ({dialogState}) => dialogState.open = true,
  close({dialogState, userData}) {
    dialogState.open = false;
    userData.username = '';
    userData.email = '';
    userData.password = '';
    dialogState.repeatedPassword = '';
    userData.verificationCode = '';
    userData.role = '';
  },
};

const actions = {
  async register({state, dispatch, commit}) {
    try {
      const response = await api.register(state.userData);
      const {code, message} = response.data;
      if (code) {
        dispatch('snackbar/showError', message, {
          root: true,
        });
      } else {
        await dispatch('snackbar/showSuccess', '注册成功', {
          root: true,
        });
        commit('close');

      }
    } catch (e) {
      dispatch('snackbar/showError', e, {
        root: true,
      });
    }
  },
  async sendVerificationCode({state, dispatch}) {
    try {
      const response = await api.sendVerificationCode(state.email);
      const {code, message} = response.data;
      if (code) {
        dispatch('snackbar/showError', message, {
          root: true,
        });
      } else {
        dispatch('snackbar/showSuccess', '验证码已发送', {
          root: true,
        });
      }
    } catch (e) {
      dispatch('snackbar/showError', e, {
        root: true,
      });
    }
  }
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}