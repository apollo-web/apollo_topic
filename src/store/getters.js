export default {
  getCurrentLevel: state => {
    return state.topicLevel
      .filter(level => level.bool)[0]
      .level
  }
}
