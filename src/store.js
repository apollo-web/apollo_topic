import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMain: false,

    headerTitle: {
      value: 'Topics',
    },
  },

  mutations: {
    UPDATE_HEADER_TITLE: (state, value) => {
      state.headerTitle.value = value
    },

    IS_MAIN: (state, bool) => {
      state.isMain = bool
    }
  },

  actions: {

  },

});
