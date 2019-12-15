<template lang="pug">
  div#topicslist
    Header
      div.header__left(
        slot="header__left"
        @click="routerBack('topics','param','param',$route.query)"
      )
        i.material-icons arrow_back
      div.header__right(
        slot="header__right"
        v-if="['s_session'].includes($route.query.type)"
        @click="closeView()"
      )
        i.material-icons close

    FilterTab

    div.topicslist__title-container
      div.topicslist__title
        p.topicslist__title-text Topics about
        p.topicslist__title-topic {{ headerTitle }}
      div.topicslist__attractions(
        v-for="(attr, key) in cities[currentTopic].attractions"
        @click="topicDetailsLink(attr.title, attr.href)"
      )
        div.topicslist__attractions-img-container
          div.topicslist__attractions-dimlayer
            div.topicslist__attractions-textbox
              span(
                :class="textClass(attr.title)"
              ) {{ textAdjust(attr.title) }}
            div.topicslist__attractions-hashbox
              span.topicslist__attractions-text {{ attr.hashtags }}
          img.topicslist__attractions-img(
            :src="attr.src"
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
import { showToast } from '@/mixins/showToast.js'
import { setHeaderTitle } from '@/mixins/setHeaderTitle.js'

export default {
  name: 'topicslist',

  mixins: [
    routerBack,
    setHeaderTitle,
    showToast
  ],

  computed: {
    ...mapState([
      'headerTitle',
      'cities',
      'currentTopic',
    ]),

    ...mapGetters([
      'getCurrentLevel',
    ]),
  },

  methods: {
    ...mapMutations([
      'UPDATE_HEADER_TITLE',
    ]),

    topicDetailsLink(title, attr) {
      this.$router.replace({
        name: 'topicdetails',
        params: {
          //topic: this.$route.params.topic,
          topic: this.currentTopic,
          attr: attr,
        },
        query: {
          lv: this.getCurrentLevel.toLowerCase(),
          type: this.$route.query.type,
        },
      })

      this.$forceUpdate()
      this.UPDATE_HEADER_TITLE(title)
    },

    textClass: function(text)
    {
      var classValue = 'topicslist__attractions-text';
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

    this.UPDATE_HEADER_TITLE(this.cities[currentTopic].title)
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

  .topicslist__attractions {
    height: 100%;
    cursor: pointer;
    max-width: 100%;
    position: relative;
    margin-bottom: $grid4x;
    padding: 0 $grid4x 0 $grid4x;

    .topicslist__attractions-img-container {
      z-index: 1;
      height: 6.25rem;
      max-width: 100%;
      overflow: hidden;
      @include border-radius();

      .topicslist__attractions-dimlayer {
        position: absolute;
        background-color: $black38;
        width: calc(100% - #{$grid4x} - #{$grid4x});
        @include border-radius();

        .topicslist__attractions-textbox {
          height: 3.75rem;
          margin: 0 auto;
          display: table;
          text-align: center;
          line-height: 3.75rem;
          vertical-align: middle;
          max-height: $grid14x;
          overflow:hidden;          
          width: calc(100% - #{$grid8x});

          .topicslist__attractions-text {
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
        .topicslist__attractions-hashbox {
          height: 40px;
          margin: 0 auto;
          display: table;
          text-align: center;
          line-height: 40px;
          width: calc(100% - #{$grid8x});

          .topicslist__attractions-text {
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

      .topicslist__attractions-img {
        z-index: 0;
        width: 100%;
      }
    }
  }
}
</style>
