<template lang="pug">
  div#headercomp
    div.header__wrapper
      div.header__left(
        v-if="['topiclists'].includes($route.name)"
        @click="$router.back()"
      )
        i.material-icons close
      div.header__title {{ headerTitle.value }}
      div.header__right(
        v-if="['topiclists'].includes($route.name)"
      ) Filters
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'headercomp',

  computed: {
    ...mapState([
      'headerTitle',
      'isMain',
    ]),
  },

  methods: {
    ...mapMutations([
      'IS_MAIN',
    ]),
  },

  // mounted () {
  //   if (this.$route.path == '/topics' || this.$route.path == '/testprep')
  //     this.IS_MAIN(true)
  //   else
  //     this.IS_MAIN(false)
  // },

}
</script>

<style lang="scss">
#headercomp {
  top: 0;
  z-index: 5;
  height: $header;
  position: sticky;
  background-color: $brand_dark;

  @supports (position: sticky) or (position: -webkit-sticky) {
    position: -webkit-sticky;
    position: sticky;
  }

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
        padding-top: $grid;
        @include font-size($grid6x);
      }
    }

    .header__right {
      right: 0;
      text-align: right;
      padding: 0 $grid4x;
      @include font-size(14px);
      @include line-height($grid8x);
    }

    .header__title {
      width: 100%;
      height: $header;
      font-weight: 700;
      position: absolute;
      text-align: center;
      display: inline-block;
      @include line-height($grid8x);
    }
  }
}
</style>
