const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = {
  //...
  plugins: [
    // ...
    new webpack.DefinePlugin({
        process: 'process/browser',
       'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
    })
    // ...
  ]
  //...
}