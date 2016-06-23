var webpack = require(`webpack`);

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    javascript: `./demo.jsx`
  },
  output: {
    filename: `/js/demo.js`,
    path: `${__dirname}/demo`
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: `babel`,
        query: {
          presets: [`es2015`, `react`]
        }
      }
    ]
  }
};
