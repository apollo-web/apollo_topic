<template lang="pug">
  div#filtertab
    div.filtertab__container(
        @click="toggleSheet(true)"
      )
      div.filtertab__category
        p.filtertab__category-title 
        p.filtertab__category-category {{ getCurrentCategoryName }}
      div.filtertab__filter
        p.filtertab__filter-text Change
        i.material-icons expand_more

    BottomSheet(
      title="Select Category"
      v-if="bottomSheet"
    )
      div.bottomsheet__body
        div.bottomsheet__body-list(
          v-for="cat in topicCategory"
          @click="setTopicCategory(cat, true)"
        ) {{ cat.name }}
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import BottomSheet from '@/components/BottomSheet'
import { nativeCalls } from '@/mixins/nativeCalls.js'

export default {
  name: 'filtertab',

  mixins: [
    nativeCalls,
  ],

  methods: {
    ...mapMutations([
      'SET_BOTTOM_SHEET',
      'SET_FILTER',
      'UPDATE_HEADER_TITLE',
    ]),

    toggleSheet(bool) {
      this.logEvent('topics_cmb_category', {type: 'bottomSheet'})
      this.SET_BOTTOM_SHEET(bool)
    },

    setTopicCategory(cat, bool) {
      this.logEvent('actsht_topics_category_item', {category: cat.dir})      
      this.SET_FILTER([cat, bool])
    },
  },

  computed: {
    ...mapState([
      'bottomSheet',
      'topicCategory',
    ]),

    ...mapGetters([
      'getCurrentCategoryName',
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

  .filtertab__category,
  .filtertab__filter {
    color: #fff;
    height: $header;
    padding: 0 $grid4x;
    display: inline-block;
  }

  .filtertab__category {
    float: left;

    .filtertab__category-title,
    .filtertab__category-category {
      display: inline-block;
      @include font-size($grid4x);
      @include line-height($grid3x);
    }

    .filtertab__category-title {
      padding-right: $grid;
    }

    .filtertab__category-category {
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

  #bottomsheet {
    top: 0;
    position: fixed;

    .bottomsheet__body {
      overflow-y: scroll;
      max-height: 80vh !important;

      &::-webkit-scrollbar {
        display: none !important;
      }
    }
  }
}
</style>
