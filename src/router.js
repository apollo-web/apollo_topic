import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Topics from '@/views/Topics.vue'
import TopicsList from '@/views/TopicsList.vue'
import TopicDetails from '@/views/details/TopicDetails.vue'

import TestPrep from '@/views/TestPrep.vue'
import TestPrepList from '@/views/TestPrepList.vue'
import TestPrepDetails from '@/views/details/TestPrepDetails.vue'

import LessonDetails from '@/views/details/LessonDetails.vue'
import LessonEntries from '@/statics/data/lessons.json'

const lessonRoutes = Object.keys(LessonEntries).map(section => {
  const children = LessonEntries[section].map(child => ({
    path: `${child.id}`,
    name: child.id,
    component: () => import(`@/markdowns/${section}/${child.id}.md`),
  }))
  return {
    path: `/${section}/:id?`,
    name: section,
    component: LessonDetails,
    children,
  }
})

export default new Router({
  mode: 'history',
  functional: true,
  base: process.env.BASE_URL,
  routes: [
    ...lessonRoutes,
    {
      path: '/',
      redirect: '/topics',
    },
    /*
      <- :topics: ->
    */
    {
      path: '/topics',
      name: 'topics',
      component: Topics,
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
    /*
      <- :testprep: ->
    */
    {
      path: '/testprep',
      name: 'testprep',
      component: TestPrep,
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
