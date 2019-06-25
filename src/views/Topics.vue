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
        src: 'https://lh3.googleusercontent.com/proxy/OHPMWhcMCfajj6pNO2fwE8RU0ZPuikmDsmqcct-L3t9RkRdl933hRc7CuKFgQBBl466x0pcUniw3_q5sEORuQ-9oJtwQETOg5bUhB0vOZnxiZTWzThBp6NWJfK-RilvtkO_L_eAG_j0w1GxBFSeHUaa9WtM=w200-h268-n-k-no',
      },
      'Dallas, TX': {
        href: 'dallas',
        status: 'Status',
        desc: 'City in Texas',
        src: 'https://lh6.googleusercontent.com/proxy/yfUE18E4Jq0kS-jB0L3PzyBc-qPe1QjG47m6wke1l6TcQjjJm0vrYRwniPcD52P-UDULYbYtyabwBW-CnofcjWAWhrsJNgGOGSsa2b-MimBXPD8rBIWqdnQMJw3E6XQRdg4uDzBnN330k5I00C4Dn5fiU_M=w200-h268-n-k-no',
      },
      'New York City, NY': {
        href: 'new_york_city',
        status: 'Status',
        desc: 'City in New York',
        src: 'https://lh6.googleusercontent.com/proxy/ZznyxEMwgSl-6i9O0HTrs4lCY7gyqEs6zmfN0R96Y3QA3-ppNn8M63ky9O41oIQ5sjEeS_MH2-x_YxeGxm6BBVFx9DbnHOp10DxIz9XCGWyUqsOOnd5KQHCkW99I5Xj4Zz3eRbtX7NlNwiwOEcHfNqH1FfY=w200-h268-n-k-no',
      },
      'Riverside, CA': {
        href: 'riverside',
        status: 'Status',
        desc: 'City in California',
        src: 'https://lh3.googleusercontent.com/proxy/Co-GOCEzwUfJEzeKyq0pwaVEy1td4tjJRCtjfSS42-exCCwEX4eOVqzN3TYiSpgzCnRoFDvPYG8zmRGQkJyvXJ5cwTMv_VZipJhriqOnggwS21u9xEDC3Oa4Ch4stIxZ4JJYNgXGuBqjE7vL7ANyz27G7bM=w200-h268-n-k-no',
      },
      'Boston, MA': {
        href: 'boston',
        status: 'Status',
        desc: 'City in Massachusetts',
        src: 'https://lh3.googleusercontent.com/proxy/lP_n9jtIcLTX7yHRL2yejJ31vlK0orXM4rFFTc9ZkNwgHt_wDeRVzHudMSJiQdUL5IIiSKeX65rU2MyHuIlAJOLybFNBF5ayqrXdQtIN047kshrzgezJra3W5abL5GUJyJri10li8BaI40FnXwQ-9oUxxHw=w356-h238-k-no',
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
