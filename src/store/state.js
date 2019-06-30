export const state = {

  topicLevel: {
    'Advanced': {
      level: 'Advanced',
      bool: false,
    },
    'Intermediate': {
      level: 'Intermediate',
      bool: false,
    },
    'Beginner': {
      level: 'Beginner',
      bool: true,
    },
  },

  bottomSheet: false,

  currentRouteParams: null,

  topicIndex: 0,

  headerTitle: 'Topics',

  cities: {
    'san_francisco_ca': {
      title: 'San Francisco, CA',
      href: 'san_francisco_ca',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/540px-GoldenGateBridge-001.jpg',
      status: 'Status',
      titleDesc: 'City in California',
      attractions: [{
          title: 'Fisherman’s Wharf, Pier 39',
          href: 'fishermans_wharf_pier_39',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Sealions_on_Pier_39%2C_SF%2C_CA%2C_jjron_26.03.2012.jpg/440px-Sealions_on_Pier_39%2C_SF%2C_CA%2C_jjron_26.03.2012.jpg',
          desc: `
            Dating back to the California Gold Rush, San Francisco’s Fisherman’s Wharf was originally little more than a collection of waterfront stands manned by entrepreneurial fishermen selling their daily catch to hungry prospectors. In the decades since, it has grown into a festive backdrop for diverse cultural events and attractions enjoyed by an estimated 12 million visitors annually. Among the more curious sights on the wharf is a colony of wild sea lions that took up residence at Pier 39 in October 1989. Although nearby shop and restaurant owners initially considered them a nuisance due to their strong odor and near-constant barking, they had a change of heart after realizing that the presence of the colony drew tourists to the area.
          `
        },
        {
          title: 'Lombard Street',
          href: 'lombard_street',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sanfran_61_bg_032605.jpg/440px-Sanfran_61_bg_032605.jpg',
        },
        {
          title: 'Golden Gate Bridge',
          href: 'golden_gate_bridge',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/540px-GoldenGateBridge-001.jpg',
        },
        {
          title: 'Ferry Building',
          href: 'ferry_building',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/San_Francisco_Ferry_Building_%28cropped%29.jpg/600px-San_Francisco_Ferry_Building_%28cropped%29.jpg',
        },
      ],
    },
    'los_angeles_ca': {
      title: 'Los Angeles, CA',
      href: 'los_angeles_ca',
      src: 'https://images.unsplash.com/photo-1534253893894-10d024888e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      status: 'Status',
      titleDesc: 'City in California',
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
      titleDesc: 'City in New York',
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
      titleDesc: 'City in California',
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
      titleDesc: 'City in Massachusetts',
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
      'Lesson 1': {
        title: 'Lesson 1',
        href: 'lesson_1'
      },
      'Lesson 2': {
        title: 'Lesson 2',
        href: 'lesson_2'
      },
      'Lesson 3': {
        title: 'Lesson 3',
        href: 'lesson_3'
      },
      'Lesson 4': {
        title: 'Lesson 4',
        href: 'lesson_4'
      },
      'Lesson 5': {
        title: 'Lesson 5',
        href: 'lesson_5'
      },
    },
    'OPIc': {
      'Lesson 1': {
        title: 'Lesson 1',
        href: 'lesson_1'
      },
      'Lesson 2': {
        title: 'Lesson 2',
        href: 'lesson_2'
      },
      'Lesson 3': {
        title: 'Lesson 3',
        href: 'lesson_3'
      },
      'Lesson 4': {
        title: 'Lesson 4',
        href: 'lesson_4'
      },
      'Lesson 5': {
        title: 'Lesson 5',
        href: 'lesson_5'
      },
    },
  },

}
