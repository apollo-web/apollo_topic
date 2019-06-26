<template lang="pug">
  div#lesson

    BottomBtnHalf(
      msg_left="Back"
      msg_right="Next"
    )
</template>

<script>
import BottomBtnHalf from '@/components/BottomBtnHalf'

export default {
  name: 'lesson',

  components: {
    BottomBtnHalf,
  },

}
</script>

<style lang="scss">
</style>
