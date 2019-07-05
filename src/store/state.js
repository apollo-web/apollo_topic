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
          desc: {
            advanced: `
              Dating back to the California Gold Rush, San Francisco’s Fisherman’s Wharf was originally little more than a collection of waterfront stands manned by entrepreneurial fishermen selling their daily catch to hungry prospectors. In the decades since, it has grown into a festive backdrop for diverse cultural events and attractions enjoyed by an estimated 12 million visitors annually. Among the more curious sights on the wharf is a colony of wild sea lions that took up residence at Pier 39 in October 1989. Although nearby shop and restaurant owners initially considered them a nuisance due to their strong odor and near-constant barking, they had a change of heart after realizing that the presence of the colony drew tourists to the area.
              \n
              No one can say for certain why the sea lions chose to adopt Pier 39 as their home. However, experts speculate that a dock-restoration project in September 1989, which required the removal of all boats from the area, may have been a motivating factor. That the San Francisco Bay is typically free of sharks and other predators and rich in sea lion staples, like sardines, anchovies, and herrings, likely served as additional incentives. Whatever the reasons, the sea lions living on the docks of Pier 39 have become world famous and are arguably the most popular attraction at Fisherman’s Wharf.
            `,
            intermediate: `
              The origin of Fisherman’s Wharf in San Francisco goes back to the mid-1800s, when people began flooding into California hoping to find gold. Fishermen took advantage of the population growth, and it was not long before they were peddling fish to both businesses and local residents. Today, the area is popular among tourists, who can choose from a variety of things to see and do. One of the more unique attractions is the colony of sea lions that lives at Pier 39.
              \n
              The sea lions have resided at Pier 39 since October 1989. It remains unknown exactly why they migrated there, but biologists believe that a number of factors were in effect. For one, when they first came to Pier 39, the docks were undergoing repairs, so they were empty. Furthermore, the waters around Pier 39 are an ideal environment for sea lions because they contain an abundance of fish and no predators. It is therefore not surprising why they stayed, and the millions of tourists who come to see them each year could not be happier.
            `,
            beginner: `
              Thousands of people moved to California in the mid-1800s. This is because they wanted to find gold and get rich. Fishermen began selling fish to gold miners near the beach, and that is how Fisherman’s Wharf in San Francisco began. There are many interesting things to see at Fisherman’s Wharf these days, so a lot of tourists visit. For example, Pier 39 is famous because hundreds of wild sea lions live there. The reason they first came to Pier 39 about 30 years ago is a mystery. However, scientists think they know why the sea lions stayed. First, the water is full of fish. Second, there are no dangerous sharks or whales nearby. This makes the pier a perfect home.
            `,
          },
        },
        {
          title: 'Lombard Street',
          href: 'lombard_street',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sanfran_61_bg_032605.jpg/440px-Sanfran_61_bg_032605.jpg',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: 'Golden Gate Bridge',
          href: 'golden_gate_bridge',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/540px-GoldenGateBridge-001.jpg',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: 'Ferry Building',
          href: 'ferry_building',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/San_Francisco_Ferry_Building_%28cropped%29.jpg/600px-San_Francisco_Ferry_Building_%28cropped%29.jpg',
          desc: {
            advanced: `
              The San Francisco Ferry Building, locally known as, “the Ferry Building,” is the main terminal for ferries that travel across the San Francisco Bay. It first opened in 1898 and at its peak supported as many as 50,000 daily commuters. However, with the opening of the Bay Bridge and the Golden Gate Bridge in the 1930s, along with the mass use of automobiles, the Ferry Building saw a drastic decline in daily commuters. By the 1950s, the Ferry Building was used very little and much of the interior was converted to standard office space. By the 1990s, with the rise of Silicon Valley, city planners wanted to restore and reopen the Ferry Building as a major city attraction. After a four-year restoration, the Ferry Building was reopened to the public in March 2003 with a world class public food market.
              \n
              On any given day, the food market is bustling with locals and tourists who roam from shop to shop discovering the newest food trends. On weekdays during lunch, locals line up outside for food tents and trucks serving up delicious artisan meals. On weekends, the Ferry Building is home to the city’s largest farmer’s market where locals can buy a wide range of fresh fruits and vegetables. Today, over a hundred years after its opening, the Ferry Building sees as many people for its world class public food market as it does for its ferry terminal. By all measures, the recent restoration and reopening of the Ferry Building has been a tremendous success.
              \n
              If you visit San Francisco, then add the Ferry Building to your itinerary so you can walk around and see, smell and taste all the amazing food trends from the Bay Area.
            `,
            intermediate: `
              The San Francisco Ferry Building is called by locals as, “the Ferry Building.” It is the main terminal for ferries that travel across the San Francisco Bay. It first opened in 1898.  At its peak it supported as many as 50,000 daily commuters. When the Golden Gate Bridge and the Bay Bridge opened in the 1930s, many people drove their cars into the city. As a result, the Ferry Building saw a drastic decline in the number of people who took ferries to and from work. By the 1950s, the Ferry Building was used very little and much of the interior was converted to standard office space. In the 1990s, technology companies in the Bay Area saw great success.   San Francisco city planners wanted to restore the Ferry Building to become a major city attraction. After a four-year restoration, the Ferry Building reopened to the public in March 2003 with a world class public food market.
              \n
              The food market has become a huge success. Many locals and tourists visit to enjoy organic and artisan meals. If you visit San Francisco, then you should stop by the Ferry Building so you can walk around and see, smell, and taste all the wonderful food.
            `,
            beginner: `
              San Francisco has a Ferry Building. The Ferry Building first opened in 1898.   The Ferry Building is one of the largest buildings near the water in San Francisco.   The Ferry Building is where people enter and exit the ferries. Ferries are boats which take people across the water. People ride the ferries to get to work or home. The Ferry Building also has a food market. The food market has many fruits and vegetables. You can walk around and see, smell, and taste all the delicious food. If you travel to San Francisco, then you should visit the Ferry Building.
            `,
          },
        },
      ],
    },
    'los_angeles_ca': {
      title: 'Los Angeles, CA',
      href: 'los_angeles_ca',
      src: 'https://images.unsplash.com/photo-1534253893894-10d024888e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      status: 'Status',
      titleDesc: 'City in California',
      attractions: [{
          title: 'Hollywood',
          href: 'hollywood',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Hollywood_sign_hill_view.jpg/500px-Hollywood_sign_hill_view.jpg',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: 'Universal Studios Hollywood',
          href: 'universal_studios_hollywood',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Universal_archway_2019.jpg/570px-Universal_archway_2019.jpg',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
      ],
    },
    'new_york_city_ny': {
      title: 'New York City, NY',
      href: 'new_york_city_ny',
      src: 'https://images.unsplash.com/photo-1445023086979-7244a12345a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      status: 'Status',
      titleDesc: 'City in New York',
      attractions: [{
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
      ],
    },
    'riverside_ca': {
      title: 'Riverside, CA',
      href: 'riverside_ca',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/MissionInn_SpanishWing.jpg/560px-MissionInn_SpanishWing.jpg',
      status: 'Status',
      titleDesc: 'City in California',
      attractions: [{
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
      ],
    },
    'boston_ma': {
      title: 'Boston, MA',
      href: 'boston_ma',
      src: 'https://images.unsplash.com/photo-1488750059241-ed3ad4563245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      status: 'Status',
      titleDesc: 'City in Massachusetts',
      attractions: [{
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
        {
          title: '',
          href: '',
          src: '',
          desc: {
            advanced: ``,
            intermediate: ``,
            beginner: ``,
          },
        },
      ],
    },
  },

  categories: {
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
