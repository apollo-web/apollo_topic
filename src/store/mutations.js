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

  SET_FILTER: (state, [cat, bool]) => {
    for (let topic in state.topicLevel) {
      state.topicLevel[topic].bool = false
    }
    state.topicLevel[cat.dir].bool = true
    state.currentFilter = cat.dir
    //state.headerTitle = cat.level
    state.bottomSheet = false
  },

  SET_CAT: (state, cat) => {
    state.currentCategory = cat
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
