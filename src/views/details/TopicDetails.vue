<template lang="pug">
  div#topicdetails
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
import BottomBtn from '@/components/BottomBtn'
import LESSONENTRIES from '@/statics/data/lessons.json'

export default {
  name: 'topicdetails',

  computed: {
    ...mapState([
      'headerTitle',
      'cities',
    ]),

    entries () {
      return LESSONENTRIES
    },
  },

  methods: {
    ...mapMutations([
      'UPDATE_HEADER_TITLE',
    ]),

    startLesson (id) {
      this.$router.push({
        name: 'topicLesson',
        params: {
          id: `${id}`,
        },
      })
    },
  },

  mounted () {
    this.UPDATE_HEADER_TITLE(
      this.cities[this.$route.params.topic]
      .attractions[this.$route.params.attr]
      .title
    )
  },

  components: {
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
