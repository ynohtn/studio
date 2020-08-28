// TODO : WEBPACK CONFIG SASS VARS
// const path = require('path');
// const withSass = require('@zeit/next-sass');

// module.exports = withSass({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: '[local]___[hash:base64:5]'
//   },
//   sassLoaderOptions: {
//     includePaths: ['pages'],
//     data: '@import "_vars.scss";'
//   },
//   webpack(config) {
//     const app = './'

//     config.resolve.alias = Object.assign(config.resolve.alias, {
//       pages: path.resolve(app, 'pages'),
//       components: path.resolve(app, 'components'),
//       styles: path.resolve(app, 'styles')
//     })

//     return config
//   }
// })