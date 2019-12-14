<template lang="pug">
  div#tab(
    v-if="['topics', 'testprep'].includes($route.name)"
  )
    div.tab__button(
      v-for="value in tab"
    )
      router-link.tab__button-link(
        :to="value.href"
      )
        button.tab__button-btn(
        ) {{ value.title }}
</template>

<script>
export default {
  name: 'tab',

  data: _ => ({
    tab: {
      Topics: {
        title: 'Topics',
        href: '/topics',
      },
      TestPrep: {
        title: 'Test Prep',
        href: '/testprep',
      },
    },
  }),

}
</script>

<style lang="scss" scoped>
#tab {
  z-index: 2;
  width: 100%;
  top: $header;
  height: $header;
  position: fixed;
  background-color: $brand_dark;
  border-bottom: 1px solid $white38;

  .tab__button {
    width: 50%;
    height: 100%;
    text-align: center;
    display: inline-block;
    @include font-size(14px);

    .tab__button-link {
      width: 100%;
      display: inline-block;
      line-height: $header;

      .tab__button-btn {
        border: none;
        outline: none;
        color: $white54;
        background-color: transparent;
      }

      &.router-link-exact-active {
        border-bottom: 1px solid #fff;

        .tab__button-btn {
          color: #fff;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
