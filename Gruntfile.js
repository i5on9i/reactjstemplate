var paths = {
  
  src:   'src/',
  dest:  'build/',
  bower_src: 'bower_components/',

  src_jsx: 'src/need-jsx-compile/',

  
};

module.exports = function(grunt) {

  /*  Load tasks  */

  require('load-grunt-tasks')(grunt);

  /*  Configure project  */

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Setup tasks
    coffee:   require('./tasks/coffee')(paths),
    concat:   require('./tasks/concat')(paths),
    bower_concat:   require('./tasks/bower-concat')(paths),
    uglify:   require('./tasks/uglify')(paths),
    copy:     require('./tasks/copy')(paths),

    babel: require('./tasks/babel')(paths),
    
  
  });
  
  /*  Register tasks  */
  
  // Default task.
  grunt.registerTask('default', ['coffee:compile', 'copy:server_deploy_coffee']);

  grunt.registerTask('jsx_compiled_coffee', ['coffee:compile_need_jsx', 'babel:jsx']);

  

  

};
