const state = {
  isOpen: false,
};

const mutations = {
  open: (state) => state.isOpen = true,
  close: (state) => state.isOpen = false,

};

export default {
  namespaced: true,
  state,
  mutations,
};