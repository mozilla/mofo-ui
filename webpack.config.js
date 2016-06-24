var webpack = require(`webpack`);

module.exports = {
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
  // target: `node`,
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
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
};
