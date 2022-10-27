const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: config => {
    config.externals = [...(config.externals || []), '@prisma/client'];
    // Important: return the modified config
    return config;
  }
});
