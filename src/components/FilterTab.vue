<template lang="pug">
  div#filtertab
    div.filtertab__container
      div.filtertab__level
        p.filtertab__level-title Topic Level:
        p.filtertab__level-level {{ getCurrentLevel }}
      div.filtertab__filter(
        @click="toggleSheet(true)"
      )
        p.filtertab__filter-text Change
        i.material-icons expand_more

    BottomSheet(
      title="Topic Level"
      v-if="bottomSheet"
    )
      div.bottomsheet__body
        div.bottomsheet__body-list(
          v-for="lv in topicLevel"
          @click="SET_TOPIC_LEVEL([lv.level, true])"
        ) {{ lv.level }}
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import BottomSheet from '@/components/BottomSheet'

export default {
  name: 'filtertab',

  methods: {
    ...mapMutations([
      'SET_BOTTOM_SHEET',
      'SET_TOPIC_LEVEL',
    ]),

    toggleSheet(bool) {
      this.SET_BOTTOM_SHEET(bool)
    },
  },

  computed: {
    ...mapState([
      'currentLevel',
      'bottomSheet',
      'topicLevel',
    ]),

    ...mapGetters([
      'getCurrentLevel',
    ]),
  },

  beforeDestroy () {
    this.SET_BOTTOM_SHEET(false)
  },

  components: {
    BottomSheet,
  },

}
</script>

<style lang="scss" scoped>
#filtertab {
  z-index: 2;
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
    cursor: pointer;

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
      margin-bottom: $grid2x;
    }
  }
}
</style>
