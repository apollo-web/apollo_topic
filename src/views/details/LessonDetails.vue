<template lang="pug">
  div#lessonDetails
    router-view#markdown.container

    p LessonDetails

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
import LESSONENTRIES from '@/statics/data/lessons.json'
import BottomBtnHalf from '@/components/BottomBtnHalf'

export default {
  name: 'lessonDetails',

  mounted () {
    console.log(this.$router.currentRoute.params.id)
    console.log(this.entries[this.$router.currentRoute.params.id])
  },

  methods: {
    slotBack () {
      this.$router.go(-1)
    },

    slotForward () {
      console.log('slotForward')
    },
  },

  computed: {
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
