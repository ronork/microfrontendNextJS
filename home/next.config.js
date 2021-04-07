const {
  withModuleFederation,
  MergeRuntime,
} = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: "home",
      library: { type: config.output.libraryTarget, name: "home" },
      filename: "static/runtime/remoteEntry.js",

      // This is where we configure the remotes we want to consume.
      // We did it that for our pdp app
      remotes: {},
      // as the name suggests, this is where we expose our local components to be
      exposes: {
        "./Header": "./components/Header",
      },
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = "http://localhost:3000/_next/";
    }

    return config;
  },
};
