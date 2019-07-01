<template lang="pug">
  div#bottomsheet(
    :aria-hidden="{true: isActive}"
  )
    div.bottomsheet__dim(
      @click="toggleHandler(false)"
      :class="{active: !isActive}"
    )
    div.bottomsheet__sheet-wrapper
      div.bottomsheet__sheet-box
        div.bottomsheet__sheet(
          :class="{active: isActive}"
        )
          div.bottomsheet__wrapper
            div.bottomsheet__header
              div.bottomsheet__header-left(
                @click="toggleHandler(false)"
              )
                i.material-icons close
              div.bottomsheet__header-title
                div.bottomsheet__header-title-text {{ title }}
            slot
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    title: String,
  },

  data: _ => ({
    isActive: true,
  }),

  computed: {
    ...mapState([
      'topicLevel',
    ]),
  },

  methods: {
    ...mapMutations([
      'SET_BOTTOM_SHEET'
    ]),

    toggleHandler(bool) {
      this.SET_BOTTOM_SHEET(bool)
      this.isActive = !this.isActive
    },

  },

  beforeDestroy () {
    this.SET_BOTTOM_SHEET(false)
  },

}
</script>

<style lang="scss" scoped>
#bottomsheet {
  left: 0;
  top: -#{$header};
  position: absolute;
  z-index: 25 !important;

  .bottomsheet__dim {
    top: 0;
    z-index: 26;
    width: 100vw;
    height: 100vh;
    bottom: $header;
    position: relative;
    background-color: $black54;
    animation: 0.35s dim_ease_in ease-in-out;

    @keyframes dim_ease_in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    &.active {
      animation: 0.35s dim_ease_out ease-in-out;

      @keyframes dim_ease_out {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }
  }

  .bottomsheet__sheet-wrapper {
    height: 100%;

    .bottomsheet__sheet-box {
      z-index: 27;
      height: 100%;
      max-width: 100%;
      position: relative;

      .bottomsheet__sheet {
        bottom: 0;
        z-index: 28;
        width: 100vw;
        height: 100%;
        padding: $grid4x 0;
        position: absolute;
        background-color: #fff;
        padding-bottom: $grid48x;
        border-radius: $grid4x $grid4x 0 0;
        animation: 0.35s slide_up ease-in-out;

        @keyframes slide_up {
          from {
            opacity: 1;
            padding-bottom: $grid52x;
          }
          to {
            opacity: 0.5;
            padding-bottom: 0;
          }
        }

        &.active {
          animation: 0.35s slide_down ease-in-out;

          @keyframes slide_down {
            from {
              opacity: 0.5;
              padding-bottom: 0;
            }
            to {
              opacity: 1;
              padding-bottom: $grid52x;
            }
          }
        }

        // iPhone X safearea
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          padding-bottom: calc(env(safe-area-inset-bottom) + #{$grid52x});
        }

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
            height: auto;
            color: $text333;

            .bottomsheet__body-list {
              cursor: pointer;
              height: $grid12x;
              @include font-size($grid4x);
              @include line-height($grid8x);
            }

            .bottomsheet__body-p {
              height: auto;
            }
          }
        }
      }
    }
  }
}
</style>
