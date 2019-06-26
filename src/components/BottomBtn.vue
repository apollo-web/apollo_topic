<template lang="pug">
  div#bottombtn
    p {{ msg }}
</template>

<script>
export default {
  name: 'bottombtn',

  props: {
    msg: String,
  },

}
</script>

<style lang="scss">
#bottombtn {
  bottom: 0;
  z-index: 2;
  width: 100%;
  display: table;
  cursor: pointer;
  height: $bottom;
  position: fixed;
  text-align: center;
  background-color: #fff;
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
</style>
