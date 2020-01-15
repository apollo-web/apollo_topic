<template lang="pug">
  div#topics
    Header
      div.header__left(
        slot="header__left"
        @click="routerBack('topics','level','level',$route.query)"
      )
        i.material-icons arrow_back
      div.header__right(
        slot="header__right"
      )
    div.topicslist__title
      p.topicslist__title-text Topic Cards for
      p.topicslist__title-topic {{ showLevel() }}

    div.topics__emptylist(
      v-if="entries['topicCards'].find(item => item.title === currentTopic).cards.filter(card => getLevel(card.level)).length == 0"
    )
      div.topics__emptylist-text Sorry, no topic cards match your level
    div.topics__list(
      v-for="(topic, key, index) in entries['topicCards'].find(item => item.title === currentTopic).cards.filter(card => getLevel(card.level))"
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
            div.topics__list-level {{ topic.level }}
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
import { nativeCalls } from '@/mixins/nativeCalls.js'
import LESSONENTRIES from '@/statics/data/lessons.json'

export default {
  name: 'topicslist',

  mixins: [
    setHeaderTitle,
    routerBack,
    nativeCalls,
  ],

  methods: {
    ...mapMutations([
      'SET_CAT_INDEX',
      'SET_CURRENT_ROUTE_PARAMS',
      'UPDATE_HEADER_TITLE',
    ]),

    topicListRouter(topic) {
      this.logEvent('topic_cards_item', {topicCard: topic})
      this.SET_CURRENT_ROUTE_PARAMS(topic.href)
      //this.UPDATE_HEADER_TITLE(this.categories[this.currentCategory].topics[this.getTopicIndex].title)
      this.$router.push({
        path: `/topicCards/${this.currentCategory}/${this.$route.query.cat}/${topic.href}`,
        query: {
          //cat: this.$route.query.cat,
          //index: 0,
          type: this.$route.query.type,
          lv: this.$route.query.lv,
        },
      })
    },

    showLevel: function()
    {
      if(this.$route.query.lv)
      {
        if(isNaN(this.$route.query.lv))
          return this.$route.query.lv
        else
          return 'Level ' + this.$route.query.lv
      }
      else
      {
        return 'All Levels'
      }
    },

    getLevel: function(level)
    {
      if(this.$route.query.lv)
      {
        var newQueryLevel = 0
        var newLevel = 0
        if(isNaN(this.$route.query.lv)) {
          if(this.$route.query.lv.toLowerCase() === 'beginner' ){
              newQueryLevel = 2
            }
            else if(this.$route.query.lv.toLowerCase() === 'intermediate' ){
              newQueryLevel = 5
            }
            else if(this.$route.query.lv.toLowerCase() === 'advanced' ){
              newQueryLevel = 8
            }          
        }
        else {
          newQueryLevel = this.$route.query.lv
        }
        if(isNaN(level)) {
            if(level.toLowerCase() === 'beginner' ){
              newLevel = 2
            }
            else if(level.toLowerCase() === 'intermediate' ){
              newLevel = 5
            }
            else if(level.toLowerCase() === 'advanced' ){
              newLevel = 8
            }
            else return true
        }
        else {
          newLevel = level
        }
        return (Number(newQueryLevel) >= (Number(newLevel) - 1)) && (Number(newQueryLevel) <= (Number(newLevel) + 1))
      }
      else
        return true
    },
  },

  computed: {
    ...mapState([
      'categories',
      'currentCategory',
      'currentTopic'
    ]),

    ...mapGetters([
      'getCurrentCategoryName',
    ]),
    
    entries () {
      return LESSONENTRIES
    },

    getTopicIndex () {
      return _.findIndex(this.categories[this.currentCategory].topics, {href: this.$route.query.cat})
    },

    setTopicDetailsDesc () {
      return this.categories[this.currentCategory].topics[this.getTopicIndex].desc
    },

    setTopicDetailsImg () {
      return this.categories[this.currentCategory].topics[this.getTopicIndex].src
    }
  },

  components: {
    Header,
  },

  mounted () {
    this.logEvent('screen_view', {screen_name: 'view_topic_cards'})
  },

}
</script>

<style lang="scss" scoped>
#topics {
  margin-top: $grid4x;
  height: 100%;


  .topicslist__title {
    height: $grid12x;

    .topicslist__title-text,
    .topicslist__title-topic {
      display: inline-block;
      @include font-size($grid4x);
      @include line-height($grid3x);
    }

    .topicslist__title-text {
      padding-right: $grid !important;
    }

    .topicslist__title-topic {
      font-weight: 700;
    }
  }
    

  .topics__emptylist{
    height: 100%;
    position: absolute;
    top: 50%;
    text-align: center;

    .topics__emptylist-text{
      display: inline-block;
    }
  }


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
        .topics__list-level,
        .topics__list-desc {
          width: 100%;
          color: #fff;
        }

        .topics__list-title {
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          @include font-size($grid4x);
        }

        .topics__list-level {
          @include font-size(14px);
          @include line-height($grid3x);
        }

        .topics__list-desc {
          color: $white54;
          overflow: hidden;
          text-overflow: ellipsis;
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
