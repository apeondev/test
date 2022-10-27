const withTM = require("next-transpile-modules")(["ui"]);
const path = require('path');

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /prisma-client\/index\.js$/,
      loader: 'string-replace-loader',
      options: {
        search: 'config.dirname = dirname',
        replace: `config.dirname = '${path.dirname(require.resolve('database/generated/prisma-client'))}'`,
      }
    })
    return config
  }
});
