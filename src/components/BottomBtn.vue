<template lang="pug">
  div#bottombtn
    p {{ msg }}
</template>

<script>
export default {
  name: 'bottombtn',

  props: {
    msg: String,
  }
}
</script>

<style lang="scss">
#bottombtn {
  bottom: 0;
  z-index: 5;
  width: 100%;
  display: table;
  cursor: pointer;
  height: $grid14x;
  position: sticky;
  text-align: center;
  background-color: #fff;
  @include line-height($grid14x);

  @supports (position: sticky) or (position: -webkit-sticky) {
    position: -webkit-sticky;
    position: sticky;
  }

  p {
    color: $brand;
    height: $grid14x;
    font-weight: 700;
    display: table-cell;
    vertical-align: middle;
    @include font-size(18px);
  }
}

@supports (padding-top: constant(safe-area-inset-top)) {
  #bottombtn {
    --safe-area-inset-top: constant(safe-area-inset-top);
    height: calc(100% + var(--safe-area-inset-top));
  }
}

@supports (padding-top: env(safe-area-inset-top)) {
  #bottombtn {
    --safe-area-inset-top: env(safe-area-inset-top);
    height: calc(100% + var(--safe-area-inset-top));
  }
}
</style>
