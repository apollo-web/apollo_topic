<template lang="pug">
  div#headercomp
    div.header__wrapper
      div.header__left(
        v-if="this.$route.path !== '/topics' && this.$route.path !== '/testprep'"
        @click="_setHeaderTitle()"
      )
        i.material-icons arrow_back
      div.header__title {{ headerTitle }}
      div.header__right(
        v-if="!this.$route.params.topic && !this.$route.params.lesson"
      ) Filters
      div.header__right(
        v-else-if="this.$route.params.attr || this.$route.params.dir"
      ) Tutor
</template>

<script>
import { mapState } from 'vuex'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'

export default {
  name: 'headercomp',

  mixins: [
    setHeaderTitle,
  ],

  computed: {
    ...mapState([
      'cities',
      'categories',
      'headerTitle',
    ]),
  },

  methods: {
    _setHeaderTitle() {
      this.$router.back()
      if (this.$route.params.topic) {
        this.setHeaderTitle(this.cities[this.$route.params.topic].title)
      }
      else if (this.$route.params.lesson) {
        console.log(this.categories[this.$route.params.lesson].title)
        // this.setHeaderTitle(this.categories[this.$route.params.lesson].title)
      }
    },
  },

}
</script>

<style lang="scss">
#headercomp {
  top: 0;
  z-index: 3;
  width: 100%;
  height: $header;
  position: fixed;
  background-color: $brand_dark;

  .header__wrapper {
    position: relative;

    .header__left,
    .header__right {
      color: #fff;
      height: $header;
      cursor: pointer;
      position: absolute;
    }

    .header__left {
      left: 0;
      z-index: 5;
      width: $header;
      text-align: center;

      i {
        padding-top: $grid2x;
        @include font-size($grid6x);
      }
    }

    .header__right {
      right: 0;
      text-align: right;
      padding: 0 $grid4x;
      @include font-size(14px);
      @include line-height($grid9x);
    }

    .header__title {
      height: $header;
      overflow: hidden;
      font-weight: 700;
      margin: 0 $header;
      position: absolute;
      text-align: center;
      white-space: nowrap;
      display: inline-block;
      text-overflow: ellipsis;
      width: calc(100% - #{$header} - #{$header});
      @include line-height($grid9x);
    }
  }
}
</style>
