const { basePath } = require('./settings');
const withLess = require('next-with-less');

module.exports = withLess({
  reactStrictMode: false,
  basePath,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        '@box-shadow': '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
        // '@primary-color': '#f74a49',
      },
      javascriptEnabled: true
    }
  }
});
