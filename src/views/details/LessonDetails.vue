<template lang="pug">
  div#lessonDetails
    router-view#markdown.container

    BottomBtnHalf(
      msg_left="Back"
      msg_right="Next"
    )
      div.slot_class(
        slot="left"
        @click="slotBack"
      )
      div.slot_class(
        slot="right"
        @click="slotForward"
      )
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import LESSONENTRIES from '@/statics/data/lessons.json'
import BottomBtnHalf from '@/components/BottomBtnHalf'

export default {
  name: 'lessonDetails',

  data: _ => ({
    header: '',
  }),

  mounted () {
    localStorage.setItem('header', this.headerTitle)
    this.header = localStorage.getItem('header')
    this.UPDATE_HEADER_TITLE(localStorage.getItem('header'))

    console.log(this.header)
    if (localStorage.getItem('reloaded')) {
      localStorage.removeItem('reloaded')
    } else {
      localStorage.setItem('reloaded', '1')
      this.$router.go(0)
    }

    // console.log(this.$router.currentRoute.params.id)
    // console.log(this.entries[this.$router.currentRoute.params.id])
  },

  methods: {
    ...mapMutations([
      'UPDATE_HEADER_TITLE',
    ]),

    slotBack () {
      this.$router.go(-1)
    },

    slotForward () {
      console.log('slotForward')
    },
  },

  computed: {
    ...mapState([
      'headerTitle',
    ]),

    entries () {
      return LESSONENTRIES
    },
  },

  components: {
    BottomBtnHalf,
  },

}
</script>

<style lang="scss">
#lessonDetails {
  padding: $header $grid4x 0;
  margin-bottom: calc(#{$bottom} + #{$grid8x});

  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    margin-bottom: calc(#{$bottom} + #{$grid20x});
  }
}
</style>
