import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import TopicLists from './views/TopicLists.vue'

export default new Router({
  mode: 'history',
  functional: true,
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/topics',
    },
    {
      path: '/topics',
      name: 'topics',
      component: _ =>
        import( /* webpackChunkName: 'topics' */ './views/Topics.vue')
    },
    {
      path: '/testprep',
      name: 'testprep',
      component: _ =>
        import( /* webpackChunkName: 'testprep' */ './views/TestPrep.vue')
    },
    {
      path: '/topiclists/:topic',
      name: 'topiclists',
      component: TopicLists,
    }
  ],

  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition)
      return savedPosition
    else {
      return {
        x: 0,
        y: 0,
      }
    }
  },
})
