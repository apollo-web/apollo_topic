export const mutations = {
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

  SET_TOPIC_LEVEL: (state, [lv, bool]) => {
    for (let lv in state.topicLevel) {
      state.topicLevel[lv].bool = false
    }
    state.topicLevel[lv].bool = true
    state.bottomSheet = false
  },

  SET_TOPIC_INDEX: (state, n) => {
    state.topicIndex = n
  }

}
