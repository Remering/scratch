const state = {
  open: false,
};

const mutations = {
  switch: (state) => state.open = !(state.open),
};

export default {
  namespaced: true,
  state,
  mutations,
};