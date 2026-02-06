const withTM = require('next-transpile-modules')(['pino-pretty', 'lokijs', 'encoding']);

module.exports = withTM({
  webpack: (config, { isServer }) => {
    // Additional webpack configuration here
    return config;
  },
});