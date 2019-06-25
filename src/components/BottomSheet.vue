<template lang="pug">
  div#bottomsheet
    div.bottomsheet__dim
    p Hello!
</template>

<script>
export default {

}
</script>

<style lang="scss">
#bottomsheet {
  z-index: 10;

  .bottomsheet__dim {
    width: 100%;
    height: 100%;
    background-color: $black54;
  }
}
</style>
