const { basePath } = require('./settings');
const withLess = require('next-with-less');

module.exports = withLess({
  reactStrictMode: true,
  basePath,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        '@primary-color': '#f74a49',
        '@border-radius-base': '.5em'
      }
    }
  }
});
