<template lang="pug">
  div#topics
    Header
      div.header__left(
        slot="header__left"
        @click="routerBack('topics')"
      )
        i.material-icons arrow_back
      div.header__right(
        slot="header__right"
      )

    div.topics__list(
      v-for="(topic, key, index) in entries['topicCards'].find(item => item.title === currentTopic).cards"
      :key="index"
    )
      div.topics__list-router(
        @click="topicListRouter(topic)"
      )
        div.topics__list-container(
          @click="setHeaderTitle(topic.title)"
        )
          div.topics__list-textwrapper
            div.topics__list-title {{ topic.title }}
            div.topics__list-status {{ topic.status }}
            div.topics__list-desc {{ topic.titleDesc }}
          div.topics__list-imgwrapper
            img.topics__list-img(
              :src="topic.src"
            )
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import Header from '@/components/Header'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'
import { routerBack } from '@/mixins/routerBack.js'
import LESSONENTRIES from '@/statics/data/lessons.json'

export default {
  name: 'topicslist',

  mixins: [
    setHeaderTitle,
    routerBack,
  ],

  methods: {
    ...mapMutations([
      'SET_CAT_INDEX',
      'SET_CURRENT_ROUTE_PARAMS',
      'UPDATE_HEADER_TITLE',
    ]),

    topicListRouter(topic) {
      this.SET_CURRENT_ROUTE_PARAMS(topic.href)
      //this.UPDATE_HEADER_TITLE(this.categories[this.currentCategory].topics[this.getAttrIndex].title)
      this.$router.push({
        path: `/topicCards/${this.currentCategory}/${this.$route.query.lv}/${topic.href}`,
        query: {
          lv: this.$route.query.lv,
          //index: 0,
          type: this.$route.query.type,
        },
      })
      /*this.$router.push({
        name: 'topicdetails',
        params: {
          category: this.currentCategory,
          topic: topic,
        },
        query: this.$route.query
      })*/
    },
  },

  computed: {
    ...mapState([
      'categories',
      'currentCategory',
      'currentTopic'
    ]),

    ...mapGetters([
      'getCurrentLevelName',
    ]),
    
    entries () {
      return LESSONENTRIES
    },

    getAttrIndex () {
      return _.findIndex(this.categories[this.currentCategory].topics, {href: this.$route.query.lv})
    },

    setTopicDetailsDesc () {
      return this.categories[this.currentCategory].topics[this.getAttrIndex].desc
    },

    setTopicDetailsImg () {
      return this.categories[this.currentCategory].topics[this.getAttrIndex].src
    }
  },

  components: {
    Header,
  },

}
</script>

<style lang="scss" scoped>
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
