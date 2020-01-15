<template lang="pug">
  div#lessonDetails
    Header
      div.header__left(
        slot="header__left"
        @click="quitLesson"
      )
        i.material-icons arrow_back
      // div.header__right(
        slot="header__right"
        v-if="hint !== ''"
        @click="toggleSheet(true)"
      // ) Hint
      div.header__right(
        slot="header__right"
        v-if="!['s_session', 't_session', 't'].includes($route.query.type)"
        @click="showToast('Select Tutor');"
      ) Select Tutor

    div.wrapper
      router-view#markdown.container

      // BottomBtnHalf(
        msg_left="Back"
        :msg_right="msg_right"
      // )
        div.slot_class(
          slot="left"
          @click="slotBack"
        )
        div.slot_class(
          slot="right"
          @click="slotForward"
        )

    BottomSheet.bottomsheet(
      title="Sample Answer"
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
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'
import { routerBack } from '@/mixins/routerBack.js'
import { nativeCalls } from '@/mixins/nativeCalls.js'
import LESSONENTRIES from '@/statics/data/lessons.json'

export default {
  name: 'lessonDetails',

  mixins: [
    setHeaderTitle,
    routerBack,
    nativeCalls,
  ],

  data: _ => ({
    hint: null,
    msg_right: 'Next',
  }),

  /*watch: {
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
  },*/

  computed: {
    ...mapState([
      'topicIndex',
      'bottomSheet',
      'categories',
      'currentCategory',
      'currentRouteParams',
    ]),

    ...mapGetters([
      'getCurrentCategory',
      'getCurrentTopic',
    ]),

    entries() {
      return LESSONENTRIES
    },

    _obj() {      
      return _.find(this.entries['topicCards'], entry => entry.title === this.getCurrentTopic)
    },

    getTopicIndex () {
      return _.findIndex(this._obj.cards, {href: this.currentRouteParams})
    },
  },

  mounted () {
    this.hint = this._obj.cards[this.getTopicIndex].hint
    this.logEvent('screen_view', {screen_name: 'view_topic_lesson'})
    // console.log(this.entries['topicLesson'][this.$route.query.index].markdowns.length)
    // console.log(`Markdown length: ${this.entries['topicLesson'][this.$route.query.index].markdowns.length}`)
    // console.log(`topicIndex: ${this.topicIndex}`)

    this.UPDATE_HEADER_TITLE(this._obj.cards[this.getTopicIndex].title)

    /*this.$nextTick(() => {
      console.log("Tick")
      if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded')
        console.log('reloaded remove')
      } else {
        console.log('reloaded 1')
        localStorage.setItem('reloaded', '1')
        this.$router.go(0)
      }
    })*/

    //if ((this.topicIndex + 1) === this.entries['topicCards'][this.$route.query.index].markdowns.length) {
    if((this.topicIndex + 1) === 1) {
      return this.msg_right = 'Finish'
    }
    else {
      return this.msg_right = 'Next'
    }
  },

  methods: {
    ...mapMutations([
      'SET_BOTTOM_SHEET',
      'SET_CAT_INDEX',
      'UPDATE_HEADER_TITLE',
    ]),

    toggleSheet(bool) {
      this.SET_BOTTOM_SHEET(bool)
    },

    quitLesson () {
      /*let _confirmClose = confirm(
        `The lesson is not finished yet.\nWould you really quit the lesson?`
      )
      if (_confirmClose) {*/
        this.$router.push({
          name: 'topicslist',
          params: {
            topic: this.currentCategory,
          },
          query: {
            cat: this.getCurrentTopic,
            type: this.$route.query.type,
            lv: this.$route.query.lv,
          }
        })

        this.$forceUpdate()
      //}
    },

    slotBack () {
      if (this.topicIndex !== 0) {
        this.SET_CAT_INDEX(this.topicIndex - 1)

        this.$router.push({
          name: 'topicCards',
          params: {
            id: this.$route.query.index,
          },
          query: {
            cat: this.getCurrentCategoryName,
            index: Number(this.topicIndex),
            type: this.$route.query.type,
            lv: this.$route.query.lv,
          },
        })

        this.$forceUpdate()
      }
      else if (this.topicIndex === 0) {
        this.$router.push({
          name: 'topicdetails',
          params: {
            category: this._obj.href,
            topic: this.entries['topicCards'].cards[this.getTopicIndex].title,
          },
          query: {
            cat: this.getCurrentCategoryName,
            type: this.$route.query.type,
            lv: this.$route.query.lv,
          },
        })

        this.$forceUpdate()
      }
    },

    slotForward () {
      let getJsonTopicIndex = _.findIndex(this.entries[this.$route.query.index], { href: this.$route.query.index })

      //let markdownLength = this.entries['topicCards'][this.$route.query.index].markdowns.length
      let markdownLength = 0

      this.SET_CAT_INDEX(this.topicIndex + 1)

      if (this.topicIndex === markdownLength) {
        this.$router.push({
          name: 'topicslist',
          params: {
            topic: this._obj.href,
          },
          query: {
            type: this.$route.query.type,
            lv: this.$route.query.lv,
          }
        })

        this.$forceUpdate()
      }
      else {
        console.log('id:' + this.$route.params.id)
        this.$router.push({
          name: 'topicCards',
          params: {
            id: this.$route.params.id,
          },
          query: {
            cat: this.getCurrentCategory,
            index: Number(this.topicIndex),
            type: this.$route.query.type,
            lv: this.$route.query.lv,
          },
        })

        this.$forceUpdate()
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

<style lang="scss" scoped>
#lessonDetails {
  .bottomsheet {
    top: 0;
    position: fixed;

    .bottomsheet__body {
      overflow-y: scroll;
      max-height: 80vh !important;

      &::-webkit-scrollbar {
        display: none !important;
      }
    }
  }
}
</style>
