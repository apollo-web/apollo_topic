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
import { mapState, mapMutations, mapGetters } from 'vuex'
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

    ...mapGetters([
      'getCurrentTopicIndex',
    ]),
  },

  methods: {
    ...mapMutations([
      'SET_TOPIC_INDEX',
    ]),

    startLesson (id) {
      // this.SET_TOPIC_INDEX(0)
        // this.cities[this.$route.params.topic]
        // .attractions[this.$route.params.attr]
        // .index
      console.log(`startLesson: ${this.getCurrentTopicIndex}`)

      this.$router.push({
        name: 'topicLesson',
        params: {
          id: id,
          // index: 0,
        },
        // query: Object.assign(this.$route.query, {
        //   index: 0,
        // }),
        query: {
          index: 0,
        },
      })
    },
  },

  mounted () {
    this.setHeaderTitle(
      this.cities[this.$route.params.topic]
      .attractions[this.$route.params.attr]
      .title
    )
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
