<template lang="pug">
  div#bottomsheet
    div.bottomsheet__dim(
      @click="toggleSheet(false)"
    )
    div.bottomsheet__sheet-box
      div.bottomsheet__sheet
        div.bottomsheet__wrapper
          div.bottomsheet__header
            div.bottomsheet__header-left(
              @click="toggleSheet(false)"
            )
              i.material-icons close
            div.bottomsheet__header-title
              div.bottomsheet__header-title-text Topic Level
          div.bottomsheet__body
            div.bottomsheet__body-list(
              v-for="level in topicLevel"
            ) {{ level.level }}
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
      'topicLevel',
    ]),
  },

  methods: {
    ...mapMutations([
      'SET_BOTTOM_SHEET'
    ]),

    toggleSheet(bool) {
      this.SET_BOTTOM_SHEET(bool)
    },
  },

  beforeDestroy () {
    this.SET_BOTTOM_SHEET(false)
  },

}
</script>

<style lang="scss">
#bottomsheet {
  z-index: 25;
  top: -#{$header};
  position: absolute;

  .bottomsheet__dim {
    top: 0;
    z-index: 26;
    width: 100vw;
    height: 100vh;
    bottom: $header;
    position: relative;
    background-color: $black54;
  }

  .bottomsheet__sheet-box {
    z-index: 27;
    position: relative;

    .bottomsheet__sheet {
      bottom: 0;
      z-index: 28;
      width: 100vw;
      height: 100%;
      padding: $grid4x 0;
      position: absolute;
      background-color: #fff;
      padding-bottom: $grid80x;
      border-radius: $grid4x $grid4x 0 0;

      .bottomsheet__wrapper {
        padding: 0 $grid4x;

        .bottomsheet__header {
          height: $grid12x;
          position: relative;

          .bottomsheet__header-left {
            color: #fff;
            cursor: pointer;
            height: $grid12x;
            position: absolute;
          }

          i,
          .bottomsheet__header-title-text {
            color: $text333;
            text-align: center;
            padding-top: $grid2x;
            display: inline-block;
          }

          .bottomsheet__header-title {
            .bottomsheet__header-title-text {
              height: $grid12x;
              overflow: hidden;
              font-weight: 700;
              margin: 0 $header;
              position: absolute;
              text-align: center;
              white-space: nowrap;
              display: inline-block;
              text-overflow: ellipsis;
              width: calc(100% - #{$header} - #{$header});
              @include font-size($grid4x);
              @include line-height($grid5x);
            }
          }
        }

        .bottomsheet__body {
          color: $text333;

          .bottomsheet__body-list {
            cursor: pointer;
            height: $grid12x;
            @include font-size($grid4x);
            @include line-height($grid8x);
          }
        }
      }
    }
  }
}
</style>
