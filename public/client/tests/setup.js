var jsdom = require('jsdom');
var objKeys = require('../polyfills/objectkeys.js');

var exposedProperties = ['window', 'navigator', 'document'];

const { JSDOM } = jsdom;

const { window } = (new JSDOM('...'));
global.window = window;
global.document = window.document;



Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};