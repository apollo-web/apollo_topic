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

  SET_CAT: (state, [lv, bool]) => {
    for (let topic in state.topicLevel) {
      state.topicLevel[topic].bool = false
    }
    state.topicLevel[lv.dir].bool = true
    state.currentCategory = lv.dir
    state.headerTitle = lv.level
    state.bottomSheet = false
  },

  SET_CAT_INDEX: (state, n) => {
    state.topicIndex = Number(n)
  },

  SET_CURRENT_ROUTE_PARAMS: (state, param) => {
    state.currentRouteParams = param
  },

  SET_CURRENT_TOPIC: (state, param) => {
    state.currentTopic = param
  },

}
