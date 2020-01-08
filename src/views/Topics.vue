<template lang="pug">
  div#topicslist
    Header
      div.header__left(
        slot="header__left"
      )
        //i.material-icons arrow_back
      div.header__right(
        slot="header__right"
        v-if="showClose()"
        @click="closeView()"
      )
        i.material-icons close

    FilterTab

    div.topicslist__title-container
      // div.topicslist__title
        p.topicslist__title-text Topics for 
        p.topicslist__title-topic {{ getLevel() }}
      div.topicslist__categories(
        v-for="(cat, key_cat) in getCategories()"
      )
        div.topicslist__topics(
          v-for="(topic, key) in categories[key_cat].topics"
          @click="topicDetailsLink(topic.title, topic.href, cat.href)"
        )
          div.topicslist__topics-img-container
            div.topicslist__topics-dimlayer
              div.topicslist__topics-textbox
                span(
                  :class="textClass(topic.title)"
                ) {{ textAdjust(topic.title) }}
              div.topicslist__topics-hashbox
                span.topicslist__topics-text {{ topic.hashtags }}
            img.topicslist__topics-img(
              :src="topic.src"
            )

    // BottomBtn(v-if="!['s_session', 't_session', 't'].includes($route.query.type)"
        msg="Enroll"      
      )
      div.slot_class(
        @click="showToast('Enroll')"
      )
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import Header from '@/components/Header'
import FilterTab from '@/components/FilterTab'
import BottomBtn from '@/components/BottomBtn'
import { routerBack } from '@/mixins/routerBack.js'
import { nativeCalls } from '@/mixins/nativeCalls.js'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'

export default {
  name: 'topics',

  mixins: [
    routerBack,
    setHeaderTitle,
    nativeCalls,
  ],

  computed: {
    ...mapState([
      'headerTitle',
      'topicCategory',
      'categories',
      'currentCategory',
      'currentFilter',
    ]),

    ...mapGetters([
      'getCurrentCategory',
    ]),
  },

  methods: {
    ...mapMutations([
      'UPDATE_HEADER_TITLE',
      'SET_CURRENT_TOPIC',
      'SET_CAT',
    ]),

    getCategories: function() {
      if(this.currentFilter === 'all')
        return this.categories;
      else {        
        return Object.keys(this.categories)
          .filter( key => key === this.currentFilter )
          .reduce( (res, key) => (res[key] = this.categories[key], res), {} )
      }
    },

    topicDetailsLink(title, topic, cat) {
      console.log('title' + title + ":"+ cat)
      this.SET_CAT(cat)
      this.$router.replace({
        name: 'topicslist',
        params: {
          //topic: this.$route.params.topic,
          topic: this.currentCategory,
          //topic: topic,
        },
        query: {
          //cat: this.getCurrentCategory.toLowerCase(),
          cat: topic,
          type: this.$route.query.type,
          lv: this.$route.query.lv,
        },
      })
      this.SET_CURRENT_TOPIC(topic)
      this.$forceUpdate()
      this.$router.go()
      this.UPDATE_HEADER_TITLE('Topics')
    },

    getLevel: function()
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
        return 'Beginner'
      }
    },

    showClose: function()
    {
      var result = false;
      var getOS = this.getMobileOS()
      if(getOS === 'Android'){
        result = true;
      }
      else if(getOS === 'iOS'){
        result = false;
      }
      //return result;
      return result && ['s_session'].includes(this.$route.query.type)
    },

    textClass: function(text)
    {
      var classValue = 'topicslist__topics-text';
      if(text.length > 34)
        classValue += ' three_lines';
      else if(text.length > 28)
        classValue += ' two_lines';
        else if(text.length > 20)
        classValue += ' oneline_small';
      return classValue;
    },

    textAdjust: function(text)
    {
      var newText;
      if(text.length > 34)
        //newText = text.substr(0, 34) + "…";
        newText = text.substr(0, 80)
      else
        newText = text;
      return newText;
    }
  },

  mounted () {
    localStorage.clear()

    this.UPDATE_HEADER_TITLE('Topics')
  },

  components: {
    Header,
    FilterTab,
    BottomBtn,
  },

}
</script>

<style lang="scss" scoped>
#topicslist {
  margin-top: $grid14x;

  .topicslist__topics {
    height: 100%;
    cursor: pointer;
    max-width: 100%;
    position: relative;
    margin-bottom: $grid4x;
    padding: 0 $grid4x 0 $grid4x;

    .topicslist__topics-img-container {
      z-index: 1;
      height: 6.25rem;
      max-width: 100%;
      overflow: hidden;
      @include border-radius();

      .topicslist__topics-dimlayer {
        position: absolute;
        height: 100%;
        background-color: $black38;
        width: calc(100% - #{$grid4x} - #{$grid4x});
        @include border-radius();

        .topicslist__topics-textbox {
          height: 3.75rem;
          margin: 0 auto;
          display: table;
          text-align: center;
          line-height: 3.75rem;
          vertical-align: middle;
          max-height: $grid14x;
          overflow:hidden;          
          width: calc(100% - #{$grid8x});

          .topicslist__topics-text {
            margin: 0 auto;
            font-weight: 700;
            display: block;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            padding-top: $grid2x;
            overflow:hidden;
            max-width: $grid72x;
            max-height: $grid14x;
            @include font-size($grid6x);
          }

          .oneline_small{
            @include font-size($grid5x);
            text-overflow: ellipsis;
            margin-top:$grid2x;
          }

          .two_lines {
            @include font-size($grid4x);
            word-break: break-all;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
          }

          .three_lines {
            @include font-size($grid4x);
            word-break: break-all;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
          }
        }
        .topicslist__topics-hashbox {
          height: 40px;
          margin: 0 auto;
          display: table;
          text-align: center;
          line-height: 40px;
          width: calc(100% - #{$grid8x});

          .topicslist__topics-text {
            font-weight: 500;
            font-style: italic;
            color: rgba(255,255,255,0.8);
            display: table-cell;
            padding-bottom: $grid2x;
            vertical-align: middle;
            @include font-size($grid4x);
          }
        }
      }

      .topicslist__topics-img {
        z-index: 0;
        width: 100%;
      }
    }
  }
}
</style>
