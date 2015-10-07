// @ref : http://babeljs.io/docs/setup/#grunt
module.exports = function (paths) {
    'use strict';
    var src_jsx = paths.src_jsx;
    var dest = paths.dest;

    return {
        options: {
            sourceMap: false,
        },
        jsx: {
            files: [{
                expand: true,
                cwd: src_jsx,
                src: ["**/*.js"],
                dest: dest + 'js/',

            }],
        }
    };
}

