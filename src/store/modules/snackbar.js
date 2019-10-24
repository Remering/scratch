const INFO = 'info';
const ERROR = 'error'
const SUCCESS = 'success'


const state = {
  open: false,
  color: ERROR,
  message: "",
};

const mutations = {
  close: (state) => state.open = false,
  setOpen: (state, newValue) => state.open = newValue,
  open: (state, {color, message}) => {
    state.open = true;
    state.color = color;
    state.message = message;
  },
};

const actions = {
  showInfo ({commit}, message) {
    commit('open', {
      color: INFO,
      message,
    })
  },
  showSuccess ({commit}, message) {
    commit('open', {
      color: SUCCESS,
      message,
    })
  },
  showError ({commit}, message) {
    commit('open', {
      color: ERROR,
      message,
    })
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}