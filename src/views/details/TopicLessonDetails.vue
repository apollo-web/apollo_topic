<template lang="pug">
  div#lessonDetails
    Header
      div.header__left(
        slot="header__left"
        @click="quitLesson"
      )
        i.material-icons arrow_back
      div.header__right(
        slot="header__right"
        v-if="hint !== ''"
        @click="toggleSheet(true)"
      ) Hint

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
      'categories',
      'currentCategory',
      'currentRouteParams',
    ]),

    ...mapGetters([
      'getCurrentLevel',
      'getCurrentTopic',
    ]),

    entries() {
      return LESSONENTRIES
    },

    _obj() {      
      return _.find(this.entries['topicCards'], entry => entry.title === this.getCurrentTopic)
    },

    getTopicAttrIndex () {
      return _.findIndex(this.entries['topicCards'], {title: this.getCurrentTopic})
    },

    getAttrIndex () {
      return _.findIndex(this._obj.cards, {href: this.currentRouteParams})
    },
  },

  mounted () {
    this.hint = this._obj.cards[this.getAttrIndex].hint

    // console.log(this.entries['topicLesson'][this.$route.query.index].markdowns.length)
    // console.log(`Markdown length: ${this.entries['topicLesson'][this.$route.query.index].markdowns.length}`)
    // console.log(`topicIndex: ${this.topicIndex}`)

    this.UPDATE_HEADER_TITLE(this._obj.cards[this.getAttrIndex].title)

    this.$nextTick(() => {
      if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded')
      } else {
        localStorage.setItem('reloaded', '1')
        this.$router.go(0)
      }
    })

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
            lv: this.getCurrentTopic,
            type: this.$route.query.type,
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
            lv: this.getCurrentLevelName,
            index: Number(this.topicIndex),
            type: this.$route.query.type,
          },
        })

        this.$forceUpdate()
      }
      else if (this.topicIndex === 0) {
        this.$router.push({
          name: 'topicdetails',
          params: {
            category: this._obj.href,
            topic: this.entries['topicCards'].cards[this.getAttrIndex].title,
          },
          query: {
            lv: this.getCurrentLevelName,
            type: this.$route.query.type,
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
            lv: this.getCurrentLevel,
            index: Number(this.topicIndex),
            type: this.$route.query.type,
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
