// Karma configuration
// Generated on Fri Jun 08 2018 13:37:51 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['qunit', 'sinon-stub-promise', 'sinon'],
    plugins: [
      'karma-qunit',
      'karma-sinon',
      'karma-chrome-launcher',
      'karma-sinon-stub-promise',
    ],
    files: [
      'src/*.js',
      'test/*.js'
    ],
    browsers: ['ChromeSec'],
    customLaunchers: {
      ChromeSec: {
        base: 'Chrome',
        flags: ['--disable-sandbox', '--disable-web-security']
      }
    },
    exclude: [
    ],
    preprocessors: {
    },
    crossOriginAttribute: false,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  })
}
