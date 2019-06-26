import {
  mapMutations
} from 'vuex'

export const setHeaderTitle = {
  methods: {
    ...mapMutations([
      'UPDATE_HEADER_TITLE',
    ]),

    setHeaderTitle(title) {
      this.UPDATE_HEADER_TITLE(title)
    },
  },

  mounted() {
    this.UPDATE_HEADER_TITLE('Topics')
  }

}
