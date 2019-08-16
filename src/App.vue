<template lang="pug">
  div#app(
    :class="{noscroll: bottomSheet}"
  )
    Tab
    router-view
</template>

<script>
import Tab from '@/components/Tab'
import { mapState } from 'vuex'

export default {
  components: {
    Tab,
  },

  computed: {
    ...mapState([
      'bottomSheet',
    ])
  },

}
</script>
<!--
<style lang="scss">
#app {
  background-color: $brand;
}
</style>
-->