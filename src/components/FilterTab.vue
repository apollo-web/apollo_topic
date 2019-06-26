<template lang="pug">
  div#filtertab
    div.filtertab__container
      div.filtertab__level
        p.filtertab__level-title Topic Level:
        p.filtertab__level-level {{ topicLevel[3] }}
      div.filtertab__filter
        p.filtertab__filter-text Change
        i.material-icons expand_more
    BottomSheet(
      v-if="bottomsheet"
    )
</template>

<script>
import { mapState } from 'vuex'
import BottomSheet from './BottomSheet'

export default {
  name: 'filtertab',

  data: _ => ({
    bottomsheet: false,
  }),

  // methods: {
  //   toggleSheet() {
  //     this.bottomsheet = !this.bottomsheet
  //   }
  // },

  computed: {
    ...mapState([
      'topicLevel',
    ])
  },

  components: {
    BottomSheet,
  },
}
</script>

<style lang="scss">
#filtertab {
  z-index: 5;
  width: 100%;
  top: $header;
  height: $header;
  position: fixed;
  background-color: $brand_dark;
  border-bottom: 1px solid $white38;

  .filtertab__level,
  .filtertab__filter {
    color: #fff;
    height: $header;
    padding: 0 $grid4x;
    display: inline-block;
  }

  .filtertab__level {
    float: left;

    .filtertab__level-title,
    .filtertab__level-level {
      display: inline-block;
      @include font-size($grid4x);
      @include line-height($grid3x);
    }

    .filtertab__level-title {
      padding-right: $grid;
    }

    .filtertab__level-level {
      font-weight: 700;
    }
  }

  .filtertab__filter {
    float: right;

    .filtertab__filter-text,
    i {
      display: inline-block;
      vertical-align: bottom;
    }

    .filtertab__filter-text {
      padding-right: $grid;
      @include font-size(14px);
    }

    i {
      margin-bottom: 10px;
    }
  }
}
</style>
