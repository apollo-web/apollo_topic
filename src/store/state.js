export const state = {

  topicLevel: {
    'ice_breakers': {
      level: 'Ice Breakers',
      dir: 'ice_breakers',
      bool: true,
    },
    'business': {
      level: 'Business',
      dir: 'business',
      bool: false,
    },
    'school_education': {
      level: 'School & Education',
      dir: 'school_education',
      bool: false,
    },
    'culture_history': {
      level: 'Culture & History',
      dir: 'culture_history',
      bool: false,
    },
    'personal_life': {
      level: 'Personal Life',
      dir: 'personal_life',
      bool: false,
    },
    'entertainment': {
      level: 'Entertainment & Hobbies',
      dir: 'entertainment',
      bool: false,
    },
    'food_drinks': {
      level: 'Food & Drinks',
      dir: 'food_drinks',
      bool: false,
    },
    'sports_health': {
      level: 'Sports & Health',
      dir: 'sports_health',
      bool: false,
    },
    'economy': {
      level: 'Economy',
      dir: 'economy',
      bool: false,
    },
    'people': {
      level: 'People & Relationships',
      dir: 'people',
      bool: false,
    },
    'discussion': {
      level: 'Discussion Topics',
      dir: 'discussion',
      bool: false,
    },
    'society_politics': {
      level: 'Society & Politics',
      dir: 'society_politics',
      bool: false,
    },
    'travel_geography': {
      level: 'Travel & Geography',
      dir: 'travel_geography',
      bool: false,
    },
  },

  bottomSheet: false,

  currentRouteParams: null,

  topicIndex: 0,

  currentCategory: 'ice_breakers',

  currentTopic: 'ice_breakers',

  headerTitle: 'Topics',

  categories: {
    'ice_breakers': {
      title: 'Ice Breakers',
      href: 'ice_breakers',
      topics: [{
        title: "Ice Breakers",
        hashtags: "#fun #beginner #firsttime",
        href: "ice_breakers",
        src: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Ice_Block%2C_Canal_Park%2C_Duluth_%2832752478892%29.jpg',
        desc: 'This is a hint',
        },
      ],
    },
    'business': {
      title: 'Business',
      href: 'business',
      topics: [{
        title: "Business",
        hashtags: "#work #career",
        href: "business",
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Society.svg',
        },
        {
          title: "Job Interview",
          hashtags: "#interview #hiring #confidence",
          href:  'job_interview',
          src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Job_interview.jpg',
        },
      ],
    },
    'school_education': {
      title: 'School & Education',
      href: 'school_education',
      topics: [{
        title: "School",
        hashtags: "#schoollife #academic #grades",
        href: 'school',
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png',
        },
        {
          title: "Foreign Language",
          hashtags: "#communicate #travel",
          href: 'foreign_language',
          src: 'https://mycroft.ai/wp-content/uploads/2018/05/languages-edited.png',
        },
      ],
    },
    'culture_history': {
      title: 'Culture & History',
      href: 'culture_history',
      topics: [{
          title: 'Culture',
          hashtags: '#',
          href: 'culture',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
      ],
    },
    'personal_life': {
      title: 'Personal Life',
      href: 'personal_life',
      topics: [{
          title: 'Decision',
          hashtags: '#',
          href: 'decision',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
        {
          title: 'Life',
          hashtags: '#',
          href: 'life',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
        {
          title: 'Self-improvement',
          hashtags: '#',
          href: 'self-improvement',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
      ],
    },
    'entertainment': {
      title: 'Entertainment & Hobbies',
      href: 'entertainment',
      topics: [{
          title: 'Arts',
          hashtags: '#',
          href: 'arts',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
        {
          title: 'Film',
          hashtags: '#',
          href: 'film',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
        {
          title: 'Music',
          hashtags: '#',
          href: 'music',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
        {
          title: 'TV Show',
          hashtags: '#',
          href: 'tv_show',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
      ],
    },
    'food_drinks': {
      title: 'Food & Drinks',
      href: 'food_drinks',
      topics: [{
          title: 'Drink',
          hashtags: '#',
          href: 'drink',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
      ],
    },
    'sports_health': {
      title: 'Sports & Health',
      href: 'sports_health',
      topics: [{
          title: 'Health',
          hashtags: '#',
          href: 'health',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
      ],
    },
    'economy': {
      title: 'Economy',
      href: 'economy',
      topics: [{
          title: 'Money & Consuming',
          hashtags: '#',
          href: 'money_&_consuming',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
      ],
    },
    'people': {
      title: 'People & Relationships',
      href: 'people',
      topics: [{
          title: 'Family',
          hashtags: '#',
          href: 'family',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
        {
          title: 'Friends',
          hashtags: '#',
          href: 'friends',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
        {
          title: 'People',
          hashtags: '#',
          href: 'people',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
        {
          title: 'Relationship',
          hashtags: '#',
          href: 'relationship',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
      ],
    },
    'discussion': {
      title: 'Discussion Topics',
      href: 'discussion',
      topics: [{
          title: 'Beauty',
          hashtags: '#',
          href: 'beauty',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
      ],
    },
    'society_politics': {
      title: 'Society & Politics',
      href: 'society_politics',
      topics: [{
          title: 'Social Problems',
          hashtags: '#',
          href: 'social_problems',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
      ],
    },
    'travel_geography': {
      title: 'Travel & Geography',
      href: 'travel_geography',
      topics: [{
          title: 'Travel',
          hashtags: '#',
          href: 'travel',
          src: 'https://www.humelibraries.vic.gov.au/files/sharedassets/libraries_website/hume_libraries/learning_programs/englishconvo.jpg?w=465&h=260',
        },
      ],
    },
  },

  tests: {
    'TOEIC Speaking': {
      'Test 1': {
        title: 'Test 1',
        href: 'test_1',
      },
      'Test 2': {
        title: 'Test 2',
        href: 'test_2'
      },
      'Test 3': {
        title: 'Test 3',
        href: 'test_3'
      },
      'Test 4': {
        title: 'Test 4',
        href: 'test_4'
      },
      'Test 5': {
        title: 'Test 5',
        href: 'test_5'
      },
    },
    'OPIc': {
      'Test 1': {
        title: 'Test 1',
        href: 'test_1'
      },
      'Test 2': {
        title: 'Test 2',
        href: 'test_2'
      },
      'Test 3': {
        title: 'Test 3',
        href: 'test_3'
      },
      'Test 4': {
        title: 'Test 4',
        href: 'test_4'
      },
      'Test 5': {
        title: 'Test 5',
        href: 'test_5'
      },
    },
  },

}
