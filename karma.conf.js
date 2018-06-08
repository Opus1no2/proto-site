// Karma configuration
// Generated on Fri Jun 08 2018 13:37:51 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['qunit', 'sinon'],
    plugins: ['karma-qunit', 'karma-sinon', 'karma-chrome-launcher'],
    files: [
      'test/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
