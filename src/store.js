import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMain: false,

    topicLevel: [
      'Advanced',
      'Intermediate',
      'Conversational',
      'Elementary',
      'Beginner',
    ],

    headerTitle: 'Topics',

    cities: {
      'San Francisco, CA': {
        href: 'san_francisco',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/540px-GoldenGateBridge-001.jpg',
        status: 'Status',
        desc: 'City in California',
        attractions: {
          'Fisherman’s Wharf, Pier 39': {
            href: '',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Sealions_on_Pier_39%2C_SF%2C_CA%2C_jjron_26.03.2012.jpg/440px-Sealions_on_Pier_39%2C_SF%2C_CA%2C_jjron_26.03.2012.jpg',
          },
          'Golden Gate Bridge': {
            href: '',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/540px-GoldenGateBridge-001.jpg',
          },
          'Title': {
            href: '',
            src: '',
          },
          'Title': {
            href: '',
            src: '',
          },
        },
      },
      'Los Angeles, CA': {
        href: 'los_angeles',
        src: 'https://images.unsplash.com/photo-1534253893894-10d024888e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        status: 'Status',
        desc: 'City in California',
        attractions: {
          'Title': {
            href: '',
            src: '',
          },
          'Title': {
            href: '',
            src: '',
          },
          'Title': {
            href: '',
            src: '',
          },
          'Title': {
            href: '',
            src: '',
          },
        },
      },
      'New York City, NY': {
        href: 'new_york_city',
        src: 'https://images.unsplash.com/photo-1445023086979-7244a12345a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        status: 'Status',
        desc: 'City in New York',
      },
      'Riverside, CA': {
        href: 'riverside',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/MissionInn_SpanishWing.jpg/560px-MissionInn_SpanishWing.jpg',
        status: 'Status',
        desc: 'City in California',
      },
      'Boston, MA': {
        href: 'boston',
        src: 'https://images.unsplash.com/photo-1488750059241-ed3ad4563245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        status: 'Status',
        desc: 'City in Massachusetts',
      },
    },

    categories: {
      'TOEIC Speaking': {
        'Lesson 1': {
          href: 'lesson_1'
        },
        'Lesson 2': {
          href: 'lesson_2'
        },
        'Lesson 3': {
          href: 'lesson_3'
        },
        'Lesson 4': {
          href: 'lesson_4'
        },
        'Lesson 5': {
          href: 'lesson_5'
        },
      },
      'OPIc': {
        'Lesson 1': {
          href: 'lesson_1'
        },
        'Lesson 2': {
          href: 'lesson_2'
        },
        'Lesson 3': {
          href: 'lesson_3'
        },
        'Lesson 4': {
          href: 'lesson_4'
        },
        'Lesson 5': {
          href: 'lesson_5'
        },
      },
    },

  },

  mutations: {
    UPDATE_HEADER_TITLE: (state, value) => {
      state.headerTitle = value
    },

    IS_MAIN: (state, bool) => {
      state.isMain = bool
    }
  },

  actions: {

  },

})
