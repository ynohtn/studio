// const withSass = require('@zeit/next-sass')
// const path = require('path')

// module.exports = withSass({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: '[local]___[hash:base64:5]'
//   },
//   sassLoaderOptions: {
//     includePaths: ['pages'],
//     data: '@import "config.scss";'
//   },
//   env: {
//     API_URL: process.env.API_URL,
//     ACCESS_TOKEN: process.env.ACCESS_TOKEN,
//     WEBSITE_URL: process.env.WEBSITE_URL
//   },
//   webpack(config) {
//     const app = './'

//     config.resolve.alias = Object.assign(config.resolve.alias, {
//       pages: path.resolve(app, 'pages'),
//       components: path.resolve(app, 'components'),
//       utils: path.resolve(app, 'utils')
//     })

//     config.module.rules.push({
//       test: /\.svg$/,
//       use: [
//         {
//           loader: '@svgr/webpack',
//           options: { ref: true }
//         },
//         {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next/static/images/',
//             outputPath: 'static/images/'
//           }
//         }
//       ]
//     })

//     return config
//   }
// })