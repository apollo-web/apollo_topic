<template lang="pug">
  div#bottombtnhalf
    div.bottombtnhalf__base
      div.bottombtnhalf__base-left
        slot.slot_class(
          name="left"
        )
        p {{ msg_left }}
      div.bottombtnhalf__base-right
        slot.slot_class(
          name="right"
        )
        p {{ msg_right }}
</template>

<script>
export default {
  name: 'bottombtnhalf',

  props: {
    msg_left: String,
    msg_right: String,
  },

}
</script>

<style lang="scss">
#bottombtnhalf {
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  position: fixed;
  padding-top: $grid4x;
  height: calc(#{$bottom_short} + #{$grid7x});

  // background-color: $brand_dark;

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
    position: absolute;
    height: calc(#{$bottom_short} + #{$grid2x});
    width: calc(49.8% - #{$grid5x});
  }

  .bottombtnhalf__base {
    margin: 0 auto;
    display: block;
    width: calc(100% - #{$grid8x});

    .bottombtnhalf__base-left,
    .bottombtnhalf__base-right {
      z-index: 2;
      cursor: pointer;
      text-align: center;
      height: $bottom_short;
      display: inline-table;
      width: calc(49.8% - #{4.5px});
      @include border-radius();
      @include line-height($bottom_short);
    }

    .bottombtnhalf__base-left {
      color: #fff;
      margin-right: $grid;
      background-color: $brand;
      border: 1px solid #fff;
    }

    .bottombtnhalf__base-right {
      color: $brand;
      margin-left: $grid;
      background-color: #fff;
    }

    p {
      height: $header;
      font-weight: 700;
      display: table-cell;
      vertical-align: middle;
      @include font-size($grid4x);
    }
  }
}
</style>
