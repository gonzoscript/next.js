module.exports = {
  experimental: {
    async redirects() {
      return [
        {
          source: '/hello',
          permanent: false,
          destination: `/${process.env.NEXT_PUBLIC_TEST_DEST}`,
        },
      ]
    },
  },
}
