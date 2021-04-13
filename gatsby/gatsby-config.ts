import path from 'path'

export default {
  siteMetadata: {
    title: 'JavaScript로 만나는 세상',
    shortName: 'Hello World JavaScript',
    description:
      '처음 시작하는 사람들을 위한 JavaScript 교재',
  },
  plugins: [
    '@primer/gatsby-theme-doctocat',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.resolve(__dirname, '..', 'src'),
      },
    },
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        icon: path.resolve(__dirname, '..', 'icon.png'),
      },
    },
  ],
}
