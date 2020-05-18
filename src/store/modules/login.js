import api from '@/api';
import {ACCOUNT_NAMESPACE, SNACKBAR_NAMESPACE, SUCCESS} from '@/global';
import sha256 from 'js-sha256';

const state = {
  userData: {
    account: '',
    password: '',
  },
  dialogState: {
    open: false,
  }
};

const mutations = {
  setAccount: (state, account) => state.userData = {...state.userData, account},
  setPassword: (state, password) => state.userData = {...state.userData, password},
  open: ({dialogState}) => dialogState.open = true,
  close({dialogState, userData}) {
    dialogState.open = false;
    userData.account = '';
    userData.password = '';
  },
};

const actions = {
  async login({dispatch, state, commit}) {
    try {
      const userData = {
        ...state.userData,
        password: sha256(state.userData.password)
      };
      const response = await api.login(userData);
      const {message, code, token} = response.data;

      dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
        code, message
      }, {
        root: true
      });

      if (code === SUCCESS) {
        commit('close');
        await dispatch(`${ACCOUNT_NAMESPACE}/updateToken`, token, {
          root: true,
        });
        await dispatch(`${ACCOUNT_NAMESPACE}/fetchProfile`, null, {
          root: true
        });
        commit(`${ACCOUNT_NAMESPACE}/setEmail`, userData.account, {
          root: true
        });
      }

    } catch (e) {
      dispatch(`${SNACKBAR_NAMESPACE}/showError`, e, {
        root: true
      });
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

