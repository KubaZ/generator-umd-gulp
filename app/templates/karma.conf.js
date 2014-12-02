// Karma configuration
// Generated on Tue Aug 20 2013 07:09:41 GMT+0200 (CEST)

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',

        frameworks: ['mocha', 'chai'],

        plugins: [
            'karma-chai',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],

        preprocessors: {
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          // (these files will be instrumented by Istanbul)
          'src/<%= moduleName %>.js': ['coverage']
        },

        // list of files / patterns to load in the browser
        files: [
            'src/<%= moduleName %>.js',
            'bower_components/sinonjs/sinon.js',
            'test/unit/*.js'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,


        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : './coverage/'
        }
    });
};
