export default {
  title: 'Realworld Example Apps',
  description: '真实世界 Web 应用示例集',
  base: '/realworld-example-apps/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: 'Realworld Frontend Specs',
        link: 'https://realworld-docs.netlify.app/docs/specs/frontend-specs/templates',
      },
      {
        text: 'Realworld Backend Specs',
        link: 'https://realworld-docs.netlify.app/docs/specs/backend-specs/introduction',
      },
      {
        text: 'Frontend Implementations',
        items: [{ text: 'nuxt-frontend', link: '/nuxt-frontend' }],
      },
      {
        text: 'Backend Implementations',
        items: [],
      },
    ],
  },
};
