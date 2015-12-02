// @ref : http://babeljs.io/docs/setup/#grunt
module.exports = function (paths) {
    'use strict';
    var src_jsx = paths.src_jsx;
    var dest = paths.dest;
    var src_out = paths.src_out + 'css/';
    var sass_src = paths.src + 'css/sass/';

    return {
        
            options: {
                sourceMap: true
            },
            main: {
                files: [{
                    expand: true,
                    cwd: sass_src,
                    src: 'main.scss',
                    dest: dest + 'css',
                    ext: '.css'
                    
                }]
            }
        
    };
}

