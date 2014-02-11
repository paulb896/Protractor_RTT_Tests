exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    //seleniumServerJar: './selenium-server-standalone-2.37.0.jar',
    // The port to start the selenium server on, or null if the server should
    // find its own unused port.
    // seleniumPort: 4444,

    chromeDriver: 'chromedriver.exe',

    chromeOnly: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    rootElement: 'body',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['*_spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
