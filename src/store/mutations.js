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

  SET_TOPIC: (state, [lv, bool]) => {
    for (let topic in state.topicLevel) {
      state.topicLevel[topic].bool = false
    }
    state.topicLevel[lv].bool = true
    state.currentTopic = lv
    state.bottomSheet = false
  },

  SET_TOPIC_INDEX: (state, n) => {
    state.topicIndex = Number(n)
  },

  SET_CURRENT_ROUTE_PARAMS: (state, param) => {
    state.currentRouteParams = param
  },

}
