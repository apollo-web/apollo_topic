<template lang="pug">
  div#topiclists
    FilterTab
    div.topiclists__title
      p.topiclists__title-text {{ titleText }}
      p.topiclists__title-topic {{ headerTitle }}
    div.topiclists__attractions(
      v-for="(attr, key) in cities[headerTitle].attractions"
    )
      div.topiclists__attractions-img-container
        div.topiclists__attractions-dimlayer
          div.topiclists__attractions-textbox
            span.topiclists__attractions-text {{ key }}
        img.topiclists__attractions-img(
          :src="attr.src"
        )

    BottomBtn(msg="Enroll")
</template>

<script>
import { mapState } from 'vuex'
import FilterTab from '../components/FilterTab'
import BottomBtn from '../components/BottomBtn'

export default {
  name: 'topiclists',

  data: _ => ({
    titleText: '',
  }),

  computed: {
    ...mapState([
      'headerTitle',
      'cities',
    ])
  },

  mounted () {
    if (this.$route.path.indexOf('/topic_lists')) {
      this.titleText = 'Topics about'
    } else if (this.$route.path.indexOf('/testprep_lists')) {
      this.titleText = 'Lessons for'
    }
  },

  components: {
    FilterTab,
    BottomBtn,
  },

}
</script>

<style lang="scss">
#topiclists {
  .topiclists__title {
    height: $grid12x;
    padding: 0 $grid4x;
    margin: $grid2x 0;

    .topiclists__title-text,
    .topiclists__title-topic {
      display: inline-block;
      @include font-size($grid4x);
      @include line-height($grid3x);
    }

    .topiclists__title-text {
      padding-right: $grid;
    }

    .topiclists__title-topic {
      font-weight: 700;
    }
  }

  .topiclists__attractions {
    height: 100%;
    max-width: 100%;
    position: relative;
    margin-bottom: $grid4x;
    padding: 0 $grid4x 0 $grid4x;

    .topiclists__attractions-img-container {
      z-index: 1;
      height: 148px;
      max-width: 100%;
      overflow: hidden;
      @include border-radius();

      .topiclists__attractions-dimlayer {
        z-index: 2;
        position: absolute;
        background-color: $black38;
        width: calc(100% - #{$grid4x} - #{$grid4x});
        @include border-radius();

        .topiclists__attractions-textbox {
          height: 148px;
          margin: 0 auto;
          display: table;
          text-align: center;
          line-height: 148px;
          width: calc(100% - #{$grid8x});

          .topiclists__attractions-text {
            font-weight: 700;
            display: table-cell;
            vertical-align: middle;
            @include font-size($grid6x);
          }
        }
      }

      .topiclists__attractions-img {
        z-index: 0;
        width: 100%;
      }
    }
  }
}
</style>
