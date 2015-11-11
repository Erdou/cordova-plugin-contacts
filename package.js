Package.describe({
    summary: "Cordova contacts plugin integration for Meteor",
    version: "0.0.1",
    name: "erdal:cordova-contacts",
    git: "https://github.com/Erdou/cordova-plugin-contacts.git"
});

var both        = ['client', 'server'];
var client      = ['client'];
var server      = ['server'];
var browser     = ['web.browser'];

Cordova.depends({
    'org.apache.cordova.contacts': '1.1.0'
});

Package.on_use(function(api) {
    api.versionsFrom('1.0');

    // import packages
    api.use(['underscore'], both);
});

Package.on_test(function (api) {
    api.use(['test-helpers', 'tinytest', 'erdal:cordova-contacts']);

    api.add_files([
        'tests/test.js'
    ], browser);
});
