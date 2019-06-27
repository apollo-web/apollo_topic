<template lang="pug">
  div#lessonDetails
    Header
      div.header__left(
        slot="header__left"
        @click="quitLesson"
      )
        i.material-icons close
      div.header__right(
        slot="header__right"
        @click="toggleSheet(true)"
      ) Hint

    div.wrapper
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

    BottomSheet.bottomsheet(
      msg="Hint"
      v-if="bottomSheet"
    )
      div.bottomsheet__body
        div.bottomsheet__body-list(
        ) Hint
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from '@/components/Header'
import BottomBtnHalf from '@/components/BottomBtnHalf'
import BottomSheet from '@/components/BottomSheet'
import LESSONENTRIES from '@/statics/data/lessons.json'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'
import { routerBack } from '@/mixins/routerBack.js'

export default {
  name: 'lessonDetails',

  mixins: [
    setHeaderTitle,
    routerBack,
  ],

  computed: {
    ...mapState([
      'topicIndex',
      'bottomSheet',
    ]),

    entries () {
      return LESSONENTRIES
    },
  },

  mounted () {
    this.setHeaderTitle(
      this.entries.topicLesson[this.topicIndex - 1].title
    )

    if (localStorage.getItem('reloaded')) {
      localStorage.removeItem('reloaded')
    } else {
      console.warn('RELOADING')
      localStorage.setItem('reloaded', '1')
      this.$router.go(0)
    }
  },

  methods: {
    ...mapMutations([
      'SET_BOTTOM_SHEET',
    ]),

    toggleSheet(bool) {
      this.SET_BOTTOM_SHEET(bool)
    },

    quitLesson () {
      let _confirmClose = confirm(
        `The lesson is not finished yet.\nWould you really quit the lesson?`
      )
      this.$router.go(-1)
    },

    slotBack () {
      this.$router.go(-1)
    },

    slotForward () {
      console.log('slotForward')
    },
  },

  beforeDestroy () {
    this.SET_BOTTOM_SHEET(false)
  },

  components: {
    Header,
    BottomBtnHalf,
    BottomSheet,
  },

}
</script>

<style lang="scss">
#lessonDetails {
  .wrapper {
    padding: $header $grid4x 0;
    margin-bottom: calc(#{$bottom} + #{$grid8x});

    @supports (padding-bottom: env(safe-area-inset-bottom)) {
      margin-bottom: calc(#{$bottom} + #{$grid20x});
    }
  }

  .bottomsheet {
    top: 0;
    position: fixed;
  }
}
</style>
