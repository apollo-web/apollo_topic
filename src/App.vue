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

}
</script>


<style lang="scss">
#app {
  background-color: $brand;
}
</style>
