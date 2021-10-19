const isDev = process.env.NODE_ENV === 'development';
const basePath = '/interest';

const RESOURCE_DOMAIN = 'https://cdn.zhangyuyan.cn';
const TEST_DOMAIN = `${basePath}/test`;

module.exports = {
  basePath,
  domain: isDev ? TEST_DOMAIN : RESOURCE_DOMAIN
};
