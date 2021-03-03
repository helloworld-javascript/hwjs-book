import path from 'path'

export default {
  siteMetadata: {
    title: 'JavaScript로 만나는 세상',
    shortName: 'Hello World JavaScript',
    description:
      '본 교재는 [패스트캠퍼스 프론트엔드 개발 스쿨](http://school.fastcampus.co.kr/dev_fds/)의 강의 자료로서 제작되었습니다. 강의에서는 이 교재에 나온 내용 외에 실무 관련 지식을 포함한 더 깊은 내용을 다루며, 퀴즈, 실습 과제 수행, 코드 리뷰, 팀 프로젝트 등의 활동을 하게 됩니다.',
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
  ],
}
