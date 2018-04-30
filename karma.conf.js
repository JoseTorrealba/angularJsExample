// Karma configuration
// Generated on Sun Jul 13 2014 09:06:13 GMT-0400 (EDT)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // some available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon', 'chai-sinon', 'jasmine'],

        // list of files / patterns to load in the browser
        files: [
            './src/client/test/bindPolyfill.js',

            './bower_components/jquery/dist/jquery.js',
            './bower_components/angular/angular.js',
            './bower_components/angular-mocks/angular-mocks.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/angular-sanitize/angular-sanitize.js',
            './bower_components/ui-router/release/angular-ui-router.js',
            "./bower_components/angular-route/angular-route.min.js",
            './bower_components/bootstrap/dist/js/bootstrap.js',
            './bower_components/toastr/toastr.js',
            './bower_components/moment/moment.js',
            "./bower_components/angular-ui-select/dist/select.js",

            /* MOCHA */
            './src/client/test/lib/specHelper.js',
            './src/client/test/lib/mockData.js',
            './src/client/test/lib/stubs.js',


            './src/client/src/app.module.js',
            './src/client/src/**/*.module.js',
            './src/client/src/**/*.js',

            './src/client/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: [],

        proxies: {
            '/': 'http://localhost:8888/'
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            //            'src/client/app/**/*.js': 'coverage',
            '{src/client/src/client/app/**/!(*.spec).js}': 'coverage'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'coverage'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            type: 'lcov',
            dir: 'report/coverage'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //        browsers: ['Chrome', 'ChromeCanary', 'FirefoxAurora', 'Safari', 'PhantomJS'],
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-mocha',
            'karma-chai',
            'karma-chai-sinon',
            'karma-sinon',
            'karma-coverage'
        ]
    });
};