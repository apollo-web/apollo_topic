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
          :src="cities[this.$route.params.topic].attractions[this.$route.params.attr].src"
        )
      div.topicdetails__text-box
        div.topicdetails__text {{ cities[this.$route.params.topic].attractions[this.$route.params.attr].desc }}

    BottomBtn(
      msg="View Lesson"
    )
      div.slot_class(@click="startLesson(cities[$route.params.topic].attractions[$route.params.attr].href)")
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from '@/components/Header'
import BottomBtn from '@/components/BottomBtn'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'
import { routerBack } from '@/mixins/routerBack.js'

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
  },

  methods: {
    ...mapMutations([
      'SET_TOPIC_INDEX',
      'SET_CURRENT_ROUTE_PARAMS',
      'UPDATE_HEADER_TITLE',
    ]),

    startLesson (id) {
      this.SET_TOPIC_INDEX(0)

      this.$router.push({
        name: 'topicLesson',
        params: {
          id: id,
        },
        query: {
          index: 0,
        },
      })
    },
  },

  mounted () {
    this.SET_CURRENT_ROUTE_PARAMS(this.$route.params.attr)
    this.UPDATE_HEADER_TITLE(this.cities[this.$route.params.topic].attractions[this.$route.params.attr].title)
  },

  beforeDestroy () {
    this.SET_TOPIC_INDEX(0)
  },

  components: {
    Header,
    BottomBtn,
  },

}
</script>

<style lang="scss">
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
