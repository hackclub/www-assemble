const { redirect } = require('next/dist/server/api-utils')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  async redirects() {
    return [
      {
        source: '/register',
        destination: 'https://www-assemble-register.hackclub.dev/',
      }
    ]
  },
})
