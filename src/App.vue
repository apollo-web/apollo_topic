<template lang="pug">
  div#app(
    :class="{noscroll: bottomSheet}"
  )
    Tab
    //ButtonTest
    router-view
</template>

<script>
import Tab from '@/components/Tab'
import ButtonTest from '@/views/ButtonTest'
import { mapState } from 'vuex'

export default {
  components: {
    Tab,
    ButtonTest,
  },

  computed: {
    ...mapState([
      'bottomSheet',
    ])
  },

}
</script>

<style lang="scss">
#app {
  background-color: $brand;
}
</style>
