<template lang="pug">
  div#testprep
    Header
      div.header__left(
        slot="header__left"
      )
      div.header__right(
        slot="header__right"
      )

    div.testprep__list(
      v-for="(test, key, index) in tests"
      :key="index"
    )
      div.testprep__list-title {{ key }}
      div.testprep__list-wrapper(
        v-for="(index, key) in test"
      )
        router-link(
          :to="{ path: `/testprep/${index.href}`, query: $route.query }"
        )
          div.testprep__list-lesson(
            @click="setHeaderTitle(key)"
          ) {{ key }}
            div.testprep__list-lesson-icon
              i.material-icons chevron_right
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'

export default {
  name: 'testprep',

  mixins: [
    setHeaderTitle,
  ],

  computed: {
    ...mapState([
      'tests',
    ]),
  },

  components: {
    Header,
  },

}
</script>

<style lang="scss" scoped>
#testprep {
  margin-top: $grid4x;
  padding-top: $grid3x;

  .testprep__list {
    .testprep__list-title,
    .testprep__list-wrapper {
      height: $grid12x;
      @include font-size($grid4x);
      @include line-height($grid8x);
    }

    .testprep__list-title {
      font-weight: 700;
    }

    .testprep__list-wrapper {
      cursor: pointer;
      color: $white87;
      position: relative;

      .testprep__list-lesson {
        color: #fff;
        height: $grid12x;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: calc(100% - #{$grid12x});

        .testprep__list-lesson-icon {
          right: 0;
          width: $grid12x;
          height: $grid12x;
          text-align: right;
          position: absolute;
          display: inline-block;
          @include font-size($grid6x);

          i {
            right: 0;
            top: $grid2x;
            position: absolute;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
