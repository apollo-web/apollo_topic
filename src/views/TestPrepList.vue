<template lang="pug">
  div#testpreplist
    Header
      div.header__left(
        slot="header__left"
        @click="$router.go(-1)"
      )
        i.material-icons close
      div.header__right(
        slot="header__right"
      )

    FilterTab

    div.topicslist__title-container
      div.topicslist__title
        p.topicslist__title-text Lessons for
        p.topicslist__title-topic {{ headerTitle }}

    BottomBtn(
      msg="Enroll"
    )
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from '@/components/Header'
import FilterTab from '@/components/FilterTab'
import BottomBtn from '@/components/BottomBtn'

export default {
  name: 'testpreplist',

  computed: {
    ...mapState([
      'headerTitle',
      'categories',
      'tests',
    ]),
  },

  methods: {
    ...mapMutations([
      'UPDATE_HEADER_TITLE',
    ]),
  },

  mounted () {
    localStorage.clear()

    // this.UPDATE_HEADER_TITLE(this.tests[this.$route.params.lesson].title)
  },

  components: {
    Header,
    FilterTab,
    BottomBtn,
  },
}
</script>

<style lang="scss" scoped>
#testpreplist {
  margin-top: $grid14x;
}
</style>
