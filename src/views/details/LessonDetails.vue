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
  }),

  watch: {
    '$route.query.index'() {
      console.log('watch!')
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

    console.log(`Topic: ${_obj.attractions[this.$route.params.id].title}\nMarkdown length: ${this.entries.topicLesson[0].markdowns.length}`)

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
        // back to topicdetails list
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
        this.SET_TOPIC_INDEX(_obj.attractions[this.$route.params.id].index - 1)

        this.$router.push({
          name: 'topicLesson',
          params: {
            id: this.$route.params.id,
          },
          query: {
            index: Number(_obj.attractions[this.$route.params.id].index - 1),
            // index: Number(this.topicIndex),
          },
        })
      }
      else if (this.topicIndex === 0) {
        // back to topicdetails list
        // if lesson -> first
        this.$router.push({
          name: 'topicdetails',
          params: {
            topic: _obj.href,
            attr: _obj.attractions[this.$route.params.id].href,
          },
        })
      }
      else {
        this.$router.go(-1)
      }
    },

    slotForward () {
      let _obj = _.find(this.cities, this.cities[this.$route.params.id])
      let mdLength = this.entries.topicLesson[0].markdowns.length

      this.SET_TOPIC_INDEX(_obj.attractions[this.$route.params.id].index)

      if (_obj.attractions[this.$route.params.id].index === mdLength) {
        // back to topicdetails list
        // if lesson end
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
            index: Number(_obj.attractions[this.$route.params.id].index),
            // index: Number(this.topicIndex),
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
