const path = require('path');

module.exports = function override(config, env) {
  // config.module.rules.push({
  //   test: /\.worker\.js$/,
  //   use: {
  //     loader: 'worker-loader',
  //     options: {
  //       inline: true,
  //       fallback: false,
  //     },
  //   },
  // });
  // // handle web worker when HMR on
  // config.output.globalObject = 'this';

  config.resolve = {
    alias: { '@': path.resolve(__dirname, 'src') },
  };

  return config;
};
