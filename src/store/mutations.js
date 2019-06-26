export default {
  UPDATE_HEADER_TITLE: (state, value) => {
    state.headerTitle = value
  },

  SET_BOTTOM_SHEET: (state, bool) => {
    if (!bool) {
      setTimeout(() => {
        state.bottomSheet = bool
      }, 250)
    } else {
      state.bottomSheet = bool
    }
  },

}
