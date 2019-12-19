<template lang="pug">
  div#topicdetails
    Header
      div.header__left(
        slot="header__left"
        @click="routerBack('topicslist', 'topic', currentCategory, $route.query)"
      )
        i.material-icons arrow_back
      div.header__right(
        slot="header__right"
        v-if="!['s_session', 't_session', 't'].includes($route.query.type)"
        @click="showToast('Select Tutor');"
      ) Select Tutor

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
      div.slot_class(
        @click="startLesson()"
      )
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import Header from '@/components/Header'
import BottomBtn from '@/components/BottomBtn'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'
import { routerBack } from '@/mixins/routerBack.js'
import { showToast } from '@/mixins/showToast.js'
import LESSONENTRIES from '@/statics/data/lessons.json'

export default {
  name: 'topicdetails',

  mixins: [
    setHeaderTitle,
    routerBack,
    showToast,
  ],

  computed: {
    ...mapState([
      'headerTitle',
      'categories',
      'currentCategory',
    ]),

    ...mapGetters([
      'getCurrentLevelName',
    ]),

    entries () {
      return LESSONENTRIES
    },

    getAttrIndex () {
      return _.findIndex(this.categories[this.currentCategory].topics, {href: this.getCurrentLevelName})
    },

    setTopicDetailsDesc () {
      return this.categories[this.currentCategory].topics[this.getAttrIndex].desc
    },

    setTopicDetailsImg () {
      return this.categories[this.currentCategory].topics[this.getAttrIndex].src
    }
  },

  methods: {
    ...mapMutations([
      'SET_CAT_INDEX',
      'SET_CURRENT_ROUTE_PARAMS',
      'UPDATE_HEADER_TITLE',
    ]),

    startLesson () {
      this.SET_CAT_INDEX(0)
      console.log(this.getCurrentLevelName)
      this.$router.push({
        //name: this.categories[this.currentCategory].topics[this.getAttrIndex].href,
        name: 'topicCards',
        params: {
          topic: this.currentCategory,
          id: this.categories[this.currentCategory].topics[this.getAttrIndex].href,
        },
        query: {
          lv: this.getCurrentLevelName,
          //index: 0,
          type: this.$route.query.type,
        },
      })

      this.$forceUpdate()
    },
  },

  mounted () {
    this.SET_CURRENT_ROUTE_PARAMS(this.$route.params.topic)
    this.UPDATE_HEADER_TITLE(this.categories[this.currentCategory].topics[this.getAttrIndex].title)
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
