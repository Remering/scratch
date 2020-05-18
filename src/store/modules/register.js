import api from '../../api';
import {LOGIN_NAMESPACE, SUCCESS} from '@/global';
import sha256 from 'js-sha256';

const state = {
  userData: {
    username: '',
    email: '',
    password: '',
    repeatedPassword: '',
    verificationCode: '',
    role: '',
  },
  dialogState: {
    open: false,
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
  setRepeatedPassword: (state, repeatedPassword) => state.userData = {...state.userData, repeatedPassword},
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
      const userData = {
        ...state.userData,
        password: sha256(state.userData.password),
        repeatedPassword: sha256(state.userData.repeatedPassword),
      };
      const response = await api.register(userData);
      const {code, message} = response.data;
      dispatch('snackbar/showState', {
        code, message
      }, {
        root: true
      });
      if (code === SUCCESS) {
        commit('close');
        commit(`${LOGIN_NAMESPACE}/open`, null, {
          root: true
        });
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
      dispatch('snackbar/showState', {
        code, message
      }, {
        root: true
      });
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