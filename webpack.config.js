module.exports = [{
  context: `${__dirname}/src`,
  entry: {
    javascript: `./exports.js`
  },
  output: {
    filename: `mofo-ui.js`,
    path: `${__dirname}/dist`,
    library: `MofoUI`,
    libraryTarget: `umd`,
    sourceMapFilename: `[file].map`
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
        loader: `babel-loader`,
        query: {
          presets: [`es2015`, `react`]
        }
      }
    ]
  }
}, {
  context: `${__dirname}/src`,
  entry: {
    javascript: `./demo/demo.jsx`
  },
  output: {
    filename: `demo.js`,
    path: `${__dirname}/demo/js`,
    sourceMapFilename: `[file].map`
  },
  devtool: `source-map`,
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: `babel-loader`,
        query: {
          presets: [`es2015`, `react`]
        }
      }
    ]
  }
}];
