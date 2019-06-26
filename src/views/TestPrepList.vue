<template lang="pug">
  div#testpreplist
    FilterTab

    div.topicslist__title-container
      div.topicslist__title
        p.topicslist__title-text Lessons for
        p.topicslist__title-topic {{ headerTitle }}

    BottomBtn(msg="Enroll")
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import FilterTab from '../components/FilterTab'
import BottomBtn from '../components/BottomBtn'

export default {
  name: 'testpreplist',

  computed: {
    ...mapState([
      'headerTitle',
      'cities',
    ]),
  },

  components: {
    FilterTab,
    BottomBtn,
  },
}
</script>

<style lang="scss">
#testpreplist {
  margin-top: $grid14x;
}
</style>
