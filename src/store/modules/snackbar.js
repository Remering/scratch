const state = {
  open: false,
  color: "error",
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

export default {
  namespaced: true,
  state,
  mutations,
}