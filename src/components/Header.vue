<template lang="pug">
  div#headercomp
    div.header__wrapper

      slot.header__left(
        name="header__left"
      )

      div.header__title {{ headerTitle }}

      slot.header__right(
        name="header__right"
      )

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

}
</script>

<style lang="scss">
#headercomp {
  top: 0;
  left: 0;
  z-index: 2;
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
