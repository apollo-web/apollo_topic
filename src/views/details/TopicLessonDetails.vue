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
        :msg_right="msg_right"
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
import { mapState, mapMutations } from 'vuex'
import Header from '@/components/Header'
import BottomBtnHalf from '@/components/BottomBtnHalf'
import BottomSheet from '@/components/BottomSheet'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'
import { routerBack } from '@/mixins/routerBack.js'
import LESSONENTRIES from '@/statics/data/lessons.json'

export default {
  name: 'lessonDetails',

  mixins: [
    setHeaderTitle,
    routerBack,
  ],

  data: _ => ({
    hint: null,
    msg_right: 'Next',
  }),

  watch: {
    '$route.query.index'() {
      this.$nextTick(() => {
        if (localStorage.getItem('reloaded')) {
          localStorage.removeItem('reloaded')
        } else {
          localStorage.setItem('reloaded', '1')
          this.$router.go(0)
        }
      })
    }
  },

  computed: {
    ...mapState([
      'topicIndex',
      'bottomSheet',
      'cities',
      'currentRouteParams',
    ]),

    entries() {
      return LESSONENTRIES
    },

    _obj() {
      return _.find(this.cities, this.cities[this.$route.query.index])
    },
  },

  mounted () {
    this.hint = this._obj.attractions[this.$route.params.id].desc

    // console.log(this.entries['topicLesson'][this.$route.query.index].markdowns.length)
    // console.log(`Markdown length: ${this.entries['topicLesson'][this.$route.query.index].markdowns.length}`)
    // console.log(`topicIndex: ${this.topicIndex}`)

    this.UPDATE_HEADER_TITLE(this._obj.attractions[this.$route.params.id].title)

    this.$nextTick(() => {
      if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded')
      } else {
        localStorage.setItem('reloaded', '1')
        this.$router.go(0)
      }
    })

    if ((this.topicIndex + 1) === this.entries['topicLesson'][this.$route.query.index].markdowns.length) {
      this.msg_right = 'Finish'
    }
    else {
      this.msg_right = 'Next'
    }
  },

  methods: {
    ...mapMutations([
      'SET_BOTTOM_SHEET',
      'SET_TOPIC_INDEX',
      'UPDATE_HEADER_TITLE',
    ]),

    toggleSheet(bool) {
      this.SET_BOTTOM_SHEET(bool)
    },

    quitLesson () {
      let _confirmClose = confirm(
        `The lesson is not finished yet.\nWould you really quit the lesson?`
      )
      if (_confirmClose) {
        this.$router.push({
          name: 'topicslist',
          params: {
            topic: this._obj.href,
          },
        })
      }
    },

    slotBack () {
      if (this.topicIndex !== 0) {
        this.SET_TOPIC_INDEX(this.topicIndex - 1)

        this.$router.push({
          name: 'topicLesson',
          params: {
            id: this.$route.query.index,
          },
          query: {
            index: Number(this.topicIndex),
          },
        })
      }
      else if (this.topicIndex === 0) {
        this.$router.push({
          name: 'topicdetails',
          params: {
            topic: this._obj.href,
            attr: this._obj.attractions[this.$route.params.id].href,
          },
        })
      }
    },

    slotForward () {
      let getJsonTopicIndex = _.findIndex(this.entries[this.$route.query.index], { href: this.$route.query.index })

      let markdownLength = this.entries['topicLesson'][this.$route.query.index].markdowns.length

      this.SET_TOPIC_INDEX(this.topicIndex + 1)

      if (this.topicIndex === markdownLength) {
        this.$router.push({
          name: 'topicdetails',
          params: {
            topic: this._obj.href,
            attr: this._obj.attractions[this.$route.params.id].href,
          },
        })
      }
      else {
        this.$router.push({
          name: 'topicLesson',
          params: {
            id: this.$route.params.id,
          },
          query: {
            index: Number(this.topicIndex),
          },
        })
      }
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
  .bottomsheet {
    top: 0;
    position: fixed;
  }
}
</style>
