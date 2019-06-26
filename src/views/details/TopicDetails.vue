<template lang="pug">
  div#topicdetails
    div.topicdetails__container
      div.topicdetails__box
        img.topicdetails__img(
          :src="cities[this.$route.params.topic].attractions[this.$route.params.attr].src"
        )

    BottomBtn(msg="View Lesson")
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BottomBtn from '@/components/BottomBtn'

export default {
  name: 'topicdetails',

  computed: {
    ...mapState([
      'headerTitle',
      'cities',
    ])
  },

  methods: {
    ...mapMutations([
      'UPDATE_HEADER_TITLE',
    ]),
  },

  components: {
    BottomBtn,
  },
}
</script>

<style lang="scss">
#topicdetails {
  .topicdetails__container {
    .topicdetails__box {
      padding: $grid4x;
      height: 100%;

      .topicdetails__img {
        width: calc(100vw - #{$grid8x});
        @include border-radius();
      }
    }
  }
}
</style>
