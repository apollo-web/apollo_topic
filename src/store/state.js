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
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG',
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
        src: 'https://apollo-public-images.s3-us-west-2.amazonaws.com/16-Tips-for-Starting-and-Succeeding-in-Your-Own-Business.jpg',
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
          src: 'https://upload.wikimedia.org/wikipedia/commons/7/77/04162012Bailes032.JPG',
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
          src: 'https://www.mentalhealthtoday.co.uk/media/30500/crossroadsprimary.jpeg',
        },
        {
          title: 'Life',
          hashtags: '#',
          href: 'life',
          src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Being_a_twin_means_you_always_have_a_pillow_or_blanket_handy.jpg',
        },
        {
          title: 'Self-improvement',
          hashtags: '#',
          href: 'self-improvement',
          src: 'https://apollo-public-images.s3-us-west-2.amazonaws.com/53921495_10157946901442814_5969261795565633536_o.jpg',
        },
      ],
    },
    'entertainment': {
      title: 'Entertainment & Hobbies',
      href: 'entertainment',
      topics: [{
          title: 'Arts',
          hashtags: '#painting #museum #creativity',
          href: 'arts',
          src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Art-portrait-collage_2.jpg',
        },
        {
          title: 'Film',
          hashtags: '#movies #actors #hollywood',
          href: 'film',
          src: 'https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg',
        },
        {
          title: 'Music',
          hashtags: '#instrument #band',
          href: 'music',
          src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Record-Album-02.jpg',
        },
        {
          title: 'TV Show',
          hashtags: '#sitcom #drama #ads',
          href: 'tv_show',
          src: 'https://upload.wikimedia.org/wikipedia/commons/6/66/SMPTE_Color_Bars.svg',
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
          src: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Soft_drink_shelf_2.jpg',
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
          src: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Girls_jog_along_Morro_Strand_State_Beach.jpg',
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
          src: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Money_poster.JPG',
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
          src: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Childhood_friends_at_a_carnival.jpg',
        },
        {
          title: 'Friends',
          hashtags: '#',
          href: 'friends',
          src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/3_barefoot_females_smiling_and_sitting_on_a_bench.jpg',
        },
        {
          title: 'People',
          hashtags: '#',
          href: 'people',
          src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Irish_dancers_in_team_costume%2C_Davis_Academy%2C_USA.jpg',
        },
        {
          title: 'Relationship',
          hashtags: '#',
          href: 'relationship',
          src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Hermandad_-_friendship.jpg',
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
          src: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Life_Pharmacy_Westfield_Albany_cosmetics_2013.jpg',
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
          src: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Bill_Clinton%2C_Yitzhak_Rabin%2C_Yasser_Arafat_at_the_White_House_1993-09-13.jpg',
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
          src: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/1_times_square_night_2013.jpg',
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
