<template lang="pug">
  div#bottombtn
    p Enroll
</template>

<script>
export default {
  name: 'bottombtn',
}
</script>

<style lang="scss">
#bottombtn {
  bottom: 0;
  z-index: 5;
  width: 100%;
  display: block;
  position: fixed;
  cursor: pointer;
  height: $grid14x;
  background-color: #fff;

  p {
    color: $brand;
    font-weight: 700;
    text-align: center;
    @include font-size(18px);
    @include line-height($grid3x);
  }
}
</style>
