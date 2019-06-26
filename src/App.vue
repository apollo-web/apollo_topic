<template lang="pug">
  div#app
    Header
    Tab
    router-view
</template>

<script>
import Header from '@/components/Header'
import Tab from '@/components/Tab'

export default {
  components: {
    Header,
    Tab,
  },

  mounted () {
    let result, computed, div = document.createElement('div');

    div.style.padding = 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)';
    document.body.appendChild(div);
    computed = getComputedStyle(div);
    result = {
      top: parseInt(computed.paddingTop) || 0,
      right: parseInt(computed.paddingRight) || 0,
      bottom: parseInt(computed.paddingBottom) || 0,
      left: parseInt(computed.paddingLeft) || 0
    };
    document.body.removeChild(div);

    return result;
  }

}
</script>

<style lang="scss">
#app {
  background-color: $brand;
}
</style>
