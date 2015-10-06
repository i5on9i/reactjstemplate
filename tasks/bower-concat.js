// @ref : https://github.com/sapegin/grunt-bower-concat
module.exports = function (paths) {
    //'use strict';

    return {
        all: {
            dest: 'build/_bower.js',
            cssDest: 'build/_bower.css',
            exclude: [
              'jquery',
            ],
            dependencies: { // order
              'underscore': ['jquery'],   // underscore needs jquery
            },
            bowerOptions: {
              relative: false
            }
        }    
    };
}