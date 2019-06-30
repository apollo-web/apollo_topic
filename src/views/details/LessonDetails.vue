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
  },

  mounted () {
    this.SET_CURRENT_ROUTE_PARAMS(this.$route.params)

    let _obj = _.find(this.cities, this.cities[this.$route.params.id])

    this.hint = _obj.attractions[this.$route.params.id].desc

    let getJsonTopicIndex = _.findIndex(this.entries.topicLesson, { href: this.$route.params.id })

    console.log(`Markdown length: ${this.entries.topicLesson[getJsonTopicIndex].markdowns.length}`)
    console.log(`topicIndex: ${this.topicIndex}`)

    this.setHeaderTitle(_obj.attractions[this.$route.params.id].title)

    this.$nextTick(() => {
      if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded')
      } else {
        localStorage.setItem('reloaded', '1')
        this.$router.go(0)
      }
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
        let _obj = _.find(this.cities, this.cities[this.$route.params.id])
        this.$router.push({
          name: 'topicslist',
          params: {
            topic: _obj.href,
            // attr: _obj.attractions[this.$route.params.id].href,
          },
        })
      }
    },

    slotBack () {
      let _obj = _.find(this.cities, this.cities[this.$route.params.id])

      if (this.topicIndex !== 0) {
        this.SET_TOPIC_INDEX(this.topicIndex - 1)

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
      else if (this.topicIndex === 0) {
        this.$router.push({
          name: 'topicdetails',
          params: {
            topic: _obj.href,
            attr: _obj.attractions[this.$route.params.id].href,
          },
        })
      }
    },

    slotForward () {
      let _obj = _.find(this.cities, this.cities[this.$route.params.id])

      let getJsonTopicIndex = _.findIndex(this.entries.topicLesson, { href: this.$route.params.id })

      let markdownLength = this.entries.topicLesson[getJsonTopicIndex].markdowns.length

      this.SET_TOPIC_INDEX(this.topicIndex + 1)

      if (this.topicIndex === markdownLength) {
        this.$router.push({
          name: 'topicdetails',
          params: {
            topic: _obj.href,
            attr: _obj.attractions[this.$route.params.id].href,
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
