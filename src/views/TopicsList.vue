<template lang="pug">
  div#topicslist
    FilterTab

    div.topicslist__title-container
      div.topicslist__title
        p.topicslist__title-text Topics about
        p.topicslist__title-topic {{ headerTitle }}
      div.topicslist__attractions(
        v-for="(attr, key) in cities[this.$route.params.topic].attractions"
        @click="topicDetailsLink(attr.title, attr.href)"
      )
        div.topicslist__attractions-img-container
          div.topicslist__attractions-dimlayer
            div.topicslist__attractions-textbox
              span.topicslist__attractions-text {{ attr.title }}
          img.topicslist__attractions-img(
            :src="attr.src"
          )

    BottomBtn(
      msg="Enroll"
    )
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import FilterTab from '@/components/FilterTab'
import BottomBtn from '@/components/BottomBtn'

export default {
  name: 'topicslist',

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

    topicDetailsLink(title, attr) {
      this.$router.replace({
        name: 'topicdetails',
        params: {
          topic: this.$route.params.topic,
          attr: attr,
        },
      })
      this.UPDATE_HEADER_TITLE(title)
    },
  },

  components: {
    FilterTab,
    BottomBtn,
  },

}
</script>

<style lang="scss">
#topicslist {
  margin-top: $grid14x;

  .topicslist__attractions {
    height: 100%;
    cursor: pointer;
    max-width: 100%;
    position: relative;
    margin-bottom: $grid4x;
    padding: 0 $grid4x 0 $grid4x;

    .topicslist__attractions-img-container {
      z-index: 1;
      height: 148px;
      max-width: 100%;
      overflow: hidden;
      @include border-radius();

      .topicslist__attractions-dimlayer {
        position: absolute;
        background-color: $black38;
        width: calc(100% - #{$grid4x} - #{$grid4x});
        @include border-radius();

        .topicslist__attractions-textbox {
          height: 148px;
          margin: 0 auto;
          display: table;
          text-align: center;
          line-height: 148px;
          width: calc(100% - #{$grid8x});

          .topicslist__attractions-text {
            font-weight: 700;
            display: table-cell;
            vertical-align: middle;
            @include font-size($grid6x);
          }
        }
      }

      .topicslist__attractions-img {
        z-index: 0;
        width: 100%;
      }
    }
  }
}
</style>
