<template lang="pug">
  div#bottombtn
    slot.slot_class
    div.bottombtn__base
      p {{ msg }}
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'bottombtn',

  props: {
    msg: String,
  },

  methods: {
    ...mapMutations([
      'SET_BOTTOM_SHEET'
    ]),
  },

  beforeDestroy () {
    this.SET_BOTTOM_SHEET(false)
  },

}
</script>
<!--
<style lang="scss" scoped>
#bottombtn {
  bottom: 0;
  z-index: 1;
  width: 100vw;
  position: fixed;
  padding-top: $grid4x;
  height: calc(#{$bottom} + #{$grid4x});

  // background gradient
  background: rgba(132, 77, 255, 0);
  background: -moz-linear-gradient(
    top,
    rgba(132, 77, 255, 0) 0%,
    rgba(132, 77, 255, 1) 12%,
    rgba(132, 77, 255, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(132, 77, 255, 0)),
    color-stop(12%, rgba(132, 77, 255, 1)),
    color-stop(100%, rgba(132, 77, 255, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(132, 77, 255, 0) 0%,
    rgba(132, 77, 255, 1) 12%,
    rgba(132, 77, 255, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(132, 77, 255, 0) 0%,
    rgba(132, 77, 255, 1) 12%,
    rgba(132, 77, 255, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(132, 77, 255, 0) 0%,
    rgba(132, 77, 255, 1) 12%,
    rgba(132, 77, 255, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(132, 77, 255, 0) 0%,
    rgba(132, 77, 255, 1) 12%,
    rgba(132, 77, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#844dff', endColorstr='#844dff', GradientType=0 );

  // iPhone X safearea
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    padding-bottom: calc(env(safe-area-inset-bottom));
  }

  .slot_class {
    width: 100%;
    height: $bottom;
    position: absolute;
  }

  .bottombtn__base {
    z-index: 2;
    margin: 0 auto;
    display: table;
    cursor: pointer;
    height: $bottom;
    text-align: center;
    background-color: #fff;
    width: calc(100% - #{$grid8x});
    @include border-radius();
    @include line-height($bottom);

    p {
      color: $brand;
      height: $header;
      font-weight: 700;
      display: table-cell;
      vertical-align: middle;
      @include font-size(18px);
    }
  }
}
</style>
-->