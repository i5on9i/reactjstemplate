// @ref : http://babeljs.io/docs/setup/#grunt
module.exports = function (paths) {
    'use strict';
    var src_jsx = paths.src_jsx;
    var dest = paths.dest;
    var src_out = paths.src_out + 'css/';
    var jade_src = paths.src + 'jade/';

    return {
        
            options: {
                pretty: true
            },
            pretty: {
                files: [{
                    expand: true,
                    cwd: jade_src,
                    src: ['**/*.jade'],
                    dest: dest + 'html',
                    ext: '.html'
                    
                }]
            }
        
    };
}

