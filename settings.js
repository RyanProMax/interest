const RESOURCE_DOMAIN = 'https://cloud.zhangyuyan.cn';
const TEST_DOMAIN = '/test';

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  basePath: '',
  domain: isDev ? TEST_DOMAIN : RESOURCE_DOMAIN
};
