const { redirect } = require('next/dist/server/api-utils')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  async rewrites() {
    return [
      {
        source: '/register',
        destination: 'https://www-assemble-register.hackclub.dev/',
      },
      {
        source: '/:slug*',
        destination: 'https://www-assemble-register.hackclub.dev/:slug*',
      },
      {
        source: '/register/:slug*',
        destination: 'https://www-assemble-register.hackclub.dev/register/:slug*',
      },
    ]
  },
  async redirects() {
    return [
      {
        permanent: true,
        source: `/register/_next/:path*`,
        destination: 'https://www-assemble-register.hackclub.dev/register/_next/:path*',
      },
      /* for images */
      {
        permanent: true,
        source: `/register/images/:query*`,
        destination: 'https://www-assemble-register.hackclub.dev/register/_next/image/:query*',
      },
    ]
  },
})
