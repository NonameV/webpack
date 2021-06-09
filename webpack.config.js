const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    // context: '/src',
    entry: {
      app:'./src/app.js',
      polyfill: 'babel-polyfill'
    },    
    plugins: [
        new htmlWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin()
    ],
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      compress: true,
      port: 9000,
      hot: true,
      host: 'localhost',
      historyApiFallback: true
    },
    module:{
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            }
            
          },
          {
            test: /\.css$/,
            use: [
              {loader: "style-loader"},
              {loader: "css-loader"}
            ]
          },
            {
              test: /\.s[ac]ss$/,
              use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
                {loader: "postcss-loader"},
                {loader: "sass-loader"}
            ],
          }
          
        ]
    }
}