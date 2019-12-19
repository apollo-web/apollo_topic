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
  let _currentCategory = store.getters.getCurrentLevel
  let _currentTopic =store.getters.getCurrentTopic
  let _childindex = LessonEntries[section].map(e => e.title).indexOf(_currentTopic);
  console.log(_currentTopic)
  
  const children = LessonEntries[section][_childindex].cards.map(child => ({
    //const cards = child.cards.map(card => ({
      path: `/${section}/:topic/:id`,
      name: child.href,
      props: (route) => ({ query: route.query.q }),
      component: _ => {
        return import(`@/markdowns/${section}/${_currentCategory}/${_currentTopic}/${child.href}.md`)
      },
      }))
    //}))

    //return cards
    /* return {
      path: `/${section}/${_currentCategory}/${child.title}`,
      name: child.title,
      component: _ => {
        return import(`@/views/details/TopicLessonDetails`)
      },
      cards,
    } */
  //})

  return {
    path: `/${section}/:topic/:id`,
    name: section,
    props: (route) => ({ query: route.query.q }),
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
      path: '/topics',
      name: 'topics',
      component: Topics,
    },
    {
      //path: '/topics/:topic',
      path: '/topicslist/:topic',
      name: 'topicslist',
      component: TopicsList,
    },
    {
      path: '/topics/:category/:topic',
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
