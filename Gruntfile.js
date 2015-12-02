var paths = {
  
  src:   'src/',
  dest:  'build/',
  bower_src: 'bower_components/',
  dest_server_static : '../server/static/',

  
};
paths.src_jsx = paths.src + 'need-jsx-compile/';
paths.src_out = paths.src + 'out/';


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
    sass: require('./tasks/sass')(paths),
    
  
  });
  
  /*  Register tasks  */
  
  // Default task.
  grunt.registerTask('default', ['coffee:compile', 'copy:server_deploy_coffee']);

  grunt.registerTask('jsx_compiled_coffee', ['coffee:compile_need_jsx', 'babel:jsx']);


  grunt.registerTask('jsx_deploy', ['coffee:compile_need_jsx', 'babel:jsx', 'concat:build_from_src_out', 'copy:server_deploy_coffee']);
  grunt.registerTask('bower_deploy', ['bower_concat:all', 'copy:server_deploy_bowerconcat']);  

  
// sass
  grunt.registerTask('sass-default', ['sass:main']);

};
