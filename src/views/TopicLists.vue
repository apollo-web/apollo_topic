<template lang="pug">
  div#topiclists
    FilterTab
    router-view
    BottomBtn
</template>

<script>
import FilterTab from '../components/FilterTab'
import BottomBtn from '../components/BottomBtn'

export default {
  name: 'topiclists',

  components: {
    FilterTab,
    BottomBtn,
  },

}
</script>
