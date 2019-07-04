<template lang="pug">
  div#topicdetails
    Header
      div.header__left(
        slot="header__left"
        @click="routerBack('topicslist', 'topic', cities[$route.params.topic].href)"
      )
        i.material-icons arrow_back
      div.header__right(
        slot="header__right"
      )

    div.topicdetails__container
      div.topicdetails__img-box
        img.topicdetails__img(
          :src="setTopicDetailsImg"
        )
      div.topicdetails__text-box
        div.topicdetails__text {{ setTopicDetailsDesc }}

    BottomBtn(
      msg="View Lesson"
    )
      div.slot_class(@click="startLesson()")
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import Header from '@/components/Header'
import BottomBtn from '@/components/BottomBtn'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'
import { routerBack } from '@/mixins/routerBack.js'
import LESSONENTRIES from '@/statics/data/lessons.json'

export default {
  name: 'topicdetails',

  mixins: [
    setHeaderTitle,
    routerBack,
  ],

  computed: {
    ...mapState([
      'headerTitle',
      'cities',
    ]),

    ...mapGetters([
      'getCurrentLevel',
    ]),

    entries () {
      return LESSONENTRIES
    },

    getAttrIndex () {
      return _.findIndex(this.cities[this.$route.params.topic].attractions, {href: this.$route.params.attr})
    },

    setTopicDetailsDesc () {
      // let uppercaseFirstLetter = string.charAt(0).toUpperCase()
      let getCurrentLevel = this.$route.query.lv.toLowerCase()
      return this.cities[this.$route.params.topic].attractions[this.getAttrIndex].desc[getCurrentLevel]
    },

    setTopicDetailsImg () {
      return this.cities[this.$route.params.topic].attractions[this.getAttrIndex].src
    }
  },

  methods: {
    ...mapMutations([
      'SET_TOPIC_INDEX',
      'SET_CURRENT_ROUTE_PARAMS',
      'UPDATE_HEADER_TITLE',
    ]),

    startLesson () {
      this.SET_TOPIC_INDEX(0)

      this.$router.push({
        name: 'topicLesson',
        params: {
          id: this.cities[this.$route.params.topic].attractions[this.getAttrIndex].href,
        },
        query: {
          lv: this.getCurrentLevel.toLowerCase(),
          index: 0,
        },
      })

      this.$forceUpdate()
    },
  },

  mounted () {
    this.SET_CURRENT_ROUTE_PARAMS(this.$route.params.attr)
    this.UPDATE_HEADER_TITLE(this.cities[this.$route.params.topic].attractions[this.getAttrIndex].title)
  },

  components: {
    Header,
    BottomBtn,
  },

}
</script>

<style lang="scss" scoped>
#topicdetails {
  .topicdetails__container {
    .topicdetails__img-box {
      height: 100%;
      padding: $grid4x;

      .topicdetails__img {
        width: calc(100vw - #{$grid8x});
        @include border-radius();
      }
    }

    .topicdetails__text-box {
      padding: 0 $grid4x;
    }
  }
}
</style>
