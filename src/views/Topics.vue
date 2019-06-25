<template lang="pug">
  div#topics
    div.topics__list(
      v-for="(city, key, index) in cities"
      :key="index"
    )
      router-link.topics__list-router(
        :to="`/topiclists/${city.href}`"
      )
        div.topics__list-container(
          @click="setHeaderTitle(key)"
        )
          div.topics__list-textwrapper
            div.topics__list-title {{ key }}
            div.topics__list-status {{ city.status }}
            div.topics__list-desc {{ city.desc }}
          div.topics__list-imgwrapper
            img.topics__list-img(
              :src="city.src"
            )
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'

export default {
  name: 'topics',

  mixins: [
    setHeaderTitle,
  ],

  data: _ => ({
    cities: {
      'Los Angeles, CA': {
        href: 'los_angeles',
        status: 'Status',
        desc: 'City in California',
        src: 'https://images.unsplash.com/photo-1534253893894-10d024888e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      },
      'Dallas, TX': {
        href: 'dallas',
        status: 'Status',
        desc: 'City in Texas',
        src: 'https://images.unsplash.com/photo-1542482780641-7f549ee20bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      },
      'New York City, NY': {
        href: 'new_york_city',
        status: 'Status',
        desc: 'City in New York',
        src: 'https://images.unsplash.com/photo-1445023086979-7244a12345a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      },
      'Riverside, CA': {
        href: 'riverside',
        status: 'Status',
        desc: 'City in California',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/MissionInn_SpanishWing.jpg/560px-MissionInn_SpanishWing.jpg',
      },
      'Boston, MA': {
        href: 'boston',
        status: 'Status',
        desc: 'City in Massachusetts',
        src: 'https://images.unsplash.com/photo-1488750059241-ed3ad4563245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      },
    },
  }),

}
</script>

<style lang="scss">
#topics {
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
          border-radius: $grid2x;
        }
      }
    }
  }
}
</style>
