import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'

Vue.use(Router)

import Topics from '@/views/Topics'
import TopicsList from '@/views/TopicsList'
import TopicDetails from '@/views/details/TopicDetails'

import TestPrep from '@/views/TestPrep'
import TestPrepList from '@/views/TestPrepList'
import TestPrepDetails from '@/views/details/TestPrepDetails'

import TopicLessonDetails from '@/views/details/TopicLessonDetails'
import LessonEntries from '@/statics/data/lessons.json'
import ButtonTest from '@/views/ButtonTest'

const lessonRoutes = Object.keys(LessonEntries).map(section => {
  let _index = store.state.topicIndex
  let _currentRouteParams = store.state.currentRouteParams
  let _currentLevel = store.getters.getCurrentLevel.toLowerCase()

  const children = LessonEntries[section].map(child => ({
    path: `/${section}/:id`,
    name: child.href,
    component: _ => {
      return import(`@/markdowns/${section}/${_currentLevel}/${_currentRouteParams}/${child.markdowns[_index]}.md`)
    },
  }))

  return {
    path: `/${section}/:id`,
    name: section,
    component: _ => {
      return import(`@/views/details/TopicLessonDetails`)
    },
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
      path: '/topicslist',
      name: 'topicslist',
      component: Topics,
    },
    {
      //path: '/topics/:topic',
      path: '/topics',
      name: 'topics',
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
    {
      path: '/button',
      name: 'buttonTest',
      component: ButtonTest,
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
