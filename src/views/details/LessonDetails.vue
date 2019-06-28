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
      title="Hint"
      v-if="bottomSheet"
    )
      div.bottomsheet__body
        p.bottomsheet__body-p {{ hint }}
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
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

  data: _ => ({
    hint: null,
  }),

  computed: {
    ...mapState([
      'topicIndex',
      'bottomSheet',
      'cities',
    ]),

    ...mapGetters([
      'getCurrentTopicIndex',
    ]),

    entries () {
      return LESSONENTRIES
    },
  },

  mounted () {
    this.SET_CURRENT_ROUTE_PARAMS(this.$route.params.id)

    let _obj = _.find(this.cities, this.cities[this.$route.params.id])

    this.hint = _obj.attractions[this.$route.params.id].desc

    this.setHeaderTitle(
      _obj.attractions[this.$route.params.id].title
    )

    this.$nextTick(() => {
      setTimeout(() => {
        if (localStorage.getItem('reloaded')) {
          localStorage.removeItem('reloaded')
        } else {
          localStorage.setItem('reloaded', '1')
          location.reload()
        }
      }, 10)
    })
  },

  methods: {
    ...mapMutations([
      'SET_BOTTOM_SHEET',
      'SET_TOPIC_INDEX',
      'SET_CURRENT_ROUTE_PARAMS',
    ]),

    toggleSheet(bool) {
      this.SET_BOTTOM_SHEET(bool)
    },

    quitLesson () {
      let _confirmClose = confirm(
        `The lesson is not finished yet.\nWould you really quit the lesson?`
      )
      if (_confirmClose) {
        this.$router.go(-1)
      }
    },

    slotBack () {
      let _obj = _.find(this.cities, this.cities[this.$route.params.id])

      if (this.getCurrentTopicIndex > 0) {
        this.$router.go(-1)
        this.SET_TOPIC_INDEX(_obj.attractions[this.$route.params.id].index - 1)

        this.$router.push({
          name: 'topicLesson',
          params: {
            id: this.$route.params.id,
          },
          query: {
            index: this.getCurrentTopicIndex,
          },
        })
      }
      else {
        this.$router.go(-1)
      }
    },

    slotForward () {
      let _obj = _.find(this.cities, this.cities[this.$route.params.id])
      this.SET_TOPIC_INDEX(_obj.attractions[this.$route.params.id].index)

      this.$router.push({
        name: 'topicLesson',
        params: {
          id: this.$route.params.id,
        },
        query: {
          index: this.getCurrentTopicIndex,
        },
      })
    },
  },

  beforeMount () {
    this.SET_TOPIC_INDEX(0)
  },

  beforeDestroy () {
    this.SET_BOTTOM_SHEET(false)
    this.SET_TOPIC_INDEX(0)
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
