<template lang="pug">
  div#topics
    Header
      div.header__left(
        slot="header__left"
      )
      div.header__right(
        slot="header__right"
      )

    div.topics__list(
      v-for="(city, key, index) in cities"
      :key="index"
    )
      div.topics__list-router(
        @click="topicListRouter(city.href)"
      )
        div.topics__list-container(
          @click="setHeaderTitle(city.title)"
        )
          div.topics__list-textwrapper
            div.topics__list-title {{ city.title }}
            div.topics__list-status {{ city.status }}
            div.topics__list-desc {{ city.desc }}
          div.topics__list-imgwrapper
            img.topics__list-img(
              :src="city.src"
            )
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'

export default {
  name: 'topics',

  mixins: [
    setHeaderTitle,
  ],

  methods: {
    topicListRouter(topic) {
      this.$router.push({
        name: 'topicslist',
        params: {
          topic: topic,
        },
      })
    },
  },

  computed: {
    ...mapState([
      'cities',
    ]),
  },

  components: {
    Header,
  },

}
</script>

<style lang="scss">
#topics {
  margin-top: $grid4x;

  .topics__list {
    cursor: pointer;

    .topics__list-router {
      width: 100%;
      display: block;
      height: $grid20x;

      .topics__list-textwrapper {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: $grid16x;
        padding: $grid2x 0;
        width: calc(100% - #{$grid16x});

        .topics__list-title,
        .topics__list-status,
        .topics__list-desc {
          width: 100%;
          color: #fff;
        }

        .topics__list-title {
          font-weight: 700;
          @include font-size($grid4x);
        }

        .topics__list-status {
          @include font-size(14px);
          @include line-height($grid3x);
        }

        .topics__list-desc {
          color: $white54;
          @include font-size(14px);
        }
      }

      .topics__list-imgwrapper {
        position: relative;

        .topics__list-img {
          right: 0;
          bottom: $grid2x;
          width: $grid16x;
          height: $grid16x;
          position: absolute;
          display: inline-block;
          @include border-radius();
        }
      }
    }
  }
}
</style>
