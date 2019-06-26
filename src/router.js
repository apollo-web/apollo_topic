import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Topics from '@/views/Topics.vue'
import TestPrep from '@/views/TestPrep.vue'

import TopicsList from '@/views/TopicsList.vue'
import TestPrepList from '@/views/TestPrepList.vue'

import TopicDetails from '@/views/details/TopicDetails.vue'
import TestPrepDetails from '@/views/details/TestPrepDetails.vue'

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
      component: Topics,
    },
    {
      path: '/testprep',
      name: 'testprep',
      component: TestPrep,
    },
    {
      path: '/topics/:topic',
      name: 'topicslist',
      component: TopicsList,
    },
    {
      path: '/topics/:topic/:attr',
      name: 'topicdetails',
      component: TopicDetails,
    },
    {
      path: '/testprep/:lesson',
      name: 'testpreplist',
      component: TestPrepList,
    },
    {
      path: '/topics/:lesson/:dir',
      name: 'testprepdetails',
      component: TestPrepDetails,
    },
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
