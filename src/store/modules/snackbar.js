const SUCCESS = 0;
const INFO = 1;
const WARNING = 2;
const ERROR = 3;

const COLORS = [
  'success', 'info', 'warning', 'error'
];

const state = {
  open: false,
  color: COLORS[ERROR],
  message: '',
};

const mutations = {
  close: (state) => state.open = false,
  setOpen: (state, newValue) => state.open = newValue,
  open: (state, {code, message}) => {
    state.open = true;
    state.color = COLORS[code];
    state.message = message;
  },
};

const actions = {
  showState({commit}, {code, message}) {
    commit('open', {
      code,
      message
    });
  },
  showSuccess({dispatch}, message) {
    dispatch('showState', {code: SUCCESS, message});
  },
  showInfo({dispatch}, message) {
    dispatch('showState', {code: INFO, message});
  },
  showWarning({dispatch}, message) {
    dispatch('showState', {code: WARNING, message});
  },
  showError({dispatch}, message) {
    dispatch('showState', {code: ERROR, message});
  },

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}