module.exports = {
  title: `kimtahen.com`,
  description: `developer note`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://kimtahen.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `kimtahen/blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `KimTaeHyeon`,
    bio: {
      role: `Developer`,
      description: ['Autonomous', 'Creative', 'Practical'],
      thumbnail: 'portrait.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/kimtahen`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `kimtahen@naver.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.01.01 ~',
        activity: 'Blog migaration from tistory to netlify',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/kimtahen/blog',
          demo: 'https://kimtahen.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],
  },
};
