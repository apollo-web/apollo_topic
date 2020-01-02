export const getters = {

  getCurrentCategory: state => {
    let currentCategory

    for (let cat in state.topicCategory) {
      if (state.topicCategory[cat].bool === true) {
        return currentCategory = state.topicCategory[cat].dir
      }
    }
  },

  getCurrentCategoryName: state => {
    let currentCategory

    for (let cat in state.topicCategory) {
      if (state.topicCategory[cat].bool === true) {
        return currentCategory = state.topicCategory[cat].name
      }
    }
  },

  getCurrentTopic: state => {
      return state.currentTopic
  },

}
