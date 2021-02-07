module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/location',
        permanent: false
      }
    ];
  }
};
