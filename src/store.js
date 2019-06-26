import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    topicLevel: [
      'Advanced',
      'Intermediate',
      'Conversational',
      'Elementary',
      'Beginner',
    ],

    headerTitle: 'Topics',

    cities: {
      'san_francisco_ca': {
        title: 'San Francisco, CA',
        href: 'san_francisco_ca',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/540px-GoldenGateBridge-001.jpg',
        status: 'Status',
        desc: 'City in California',
        attractions: {
          'fishermans_wharf_pier_39': {
            title: 'Fisherman’s Wharf, Pier 39',
            href: 'fishermans_wharf_pier_39',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Sealions_on_Pier_39%2C_SF%2C_CA%2C_jjron_26.03.2012.jpg/440px-Sealions_on_Pier_39%2C_SF%2C_CA%2C_jjron_26.03.2012.jpg',
          },
          'golden_gate_bridge': {
            title: 'Golden Gate Bridge',
            href: 'golden_gate_bridge',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/540px-GoldenGateBridge-001.jpg',
          },
          'Title': {
            title: '',
            href: '',
            src: '',
          },
          'Title': {
            title: '',
            href: '',
            src: '',
          },
        },
      },
      'los_angeles_ca': {
        title: 'Los Angeles, CA',
        href: 'los_angeles_ca',
        src: 'https://images.unsplash.com/photo-1534253893894-10d024888e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        status: 'Status',
        desc: 'City in California',
        attractions: {
          'hollywood': {
            title: 'Hollywood',
            href: 'hollywood',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Hollywood_sign_hill_view.jpg/500px-Hollywood_sign_hill_view.jpg',
          },
          'universal_studios_hollywood': {
            title: 'Universal Studios Hollywood',
            href: 'universal_studios_hollywood',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Universal_archway_2019.jpg/570px-Universal_archway_2019.jpg',
          },
          'Title': {
            title: '',
            href: '',
            src: '',
          },
          'Title': {
            title: '',
            href: '',
            src: '',
          },
        },
      },
      'new_york_city_ny': {
        title: 'New York City, NY',
        href: 'new_york_city_ny',
        src: 'https://images.unsplash.com/photo-1445023086979-7244a12345a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        status: 'Status',
        desc: 'City in New York',
        attractions: {
          'Title': {
            title: '',
            href: '',
            src: '',
          },
          'Title': {
            title: '',
            href: '',
            src: '',
          },
          'Title': {
            title: '',
            href: '',
            src: '',
          },
          'Title': {
            title: '',
            href: '',
            src: '',
          },
        },
      },
      'riverside_ca': {
        title: 'Riverside, CA',
        href: 'riverside_ca',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/MissionInn_SpanishWing.jpg/560px-MissionInn_SpanishWing.jpg',
        status: 'Status',
        desc: 'City in California',
        attractions: {
          'Title': {
            title: '',
            href: '',
            src: '',
          },
          'Title': {
            title: '',
            href: '',
            src: '',
          },
          'Title': {
            title: '',
            href: '',
            src: '',
          },
          'Title': {
            title: '',
            href: '',
            src: '',
          },
        },
      },
      'boston_ma': {
        title: 'Boston, MA',
        href: 'boston_ma',
        src: 'https://images.unsplash.com/photo-1488750059241-ed3ad4563245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        status: 'Status',
        desc: 'City in Massachusetts',
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
    },

    categories: {
      'TOEIC Speaking': {
        // title: 'TOEIC Speaking',
        'Lesson 1': {
          title: 'Lesson 1',
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
  },

  actions: {

  },

})
