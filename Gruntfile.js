var paths = {
  
  src:   'src/',
  dest:  'build/',

  
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
    
  
  });
  
  /*  Register tasks  */
  
  // Default task.
  grunt.registerTask('default', ['coffee:compile']);
  grunt.registerTask('_default', ['coffee:compile', 'concat:build', 'uglify:minify', 'less:build', 'cssmin:minify', 'copy:locale']);

  

  

};
