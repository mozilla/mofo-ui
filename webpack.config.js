module.exports = [{
  context: `${__dirname}/src`,
  entry: {
    javascript: `./exports.js`
  },
  output: {
    filename: `/mofo-ui.js`,
    path: `${__dirname}/dist`,
    library: `MofoUI`,
    libraryTarget: `umd`
  },
  externals: [
    {
      react: `react`,
      "rc-collapse": true
    }
  ],
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
}, {
  context: `${__dirname}/src`,
  entry: {
    javascript: `./demo.jsx`
  },
  output: {
    filename: `/demo.js`,
    path: `${__dirname}/demo/js`
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
}];
