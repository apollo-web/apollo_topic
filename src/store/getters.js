export const getters = {

  getCurrentLevel: state => {
    let currentLevel

    for (let lv in state.topicLevel) {
      if (state.topicLevel[lv].bool === true) {
        return currentLevel = state.topicLevel[lv].level
      }
    }
  },

}
