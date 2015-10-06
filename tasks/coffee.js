module.exports = function (paths) {

  var src = paths.src;
  var dest = paths.dest;

  return {
    compile: {
      expand: true,
      cwd: src + 'coffee/',
      src: ["**/*.coffee"],
      dest: dest + 'js/',
      ext: '.js'
    },


    rename_compile:{
      expand: true,
      cwd: src + 'sources/',
      src: ['**/*.coffee', '*.coffee'],
      dest: src + 'build/',

      rename: function(dest, src) {
        var result_name,
          path = require('path'),
          src_dir = src.replace('\\', path.sep).replace('/', path.sep);
        if (src_dir.indexOf(path.sep) != -1) {
          result_name = src_dir.split(path.sep).slice(0, 1)[0] + '_' + path.basename(src);
        } else {
          result_name = path.basename(src);
        }
        // Prefix each javascript file with the folder name into the destination
        return path.join(dest, result_name.replace('.coffee', '.js'));
      }

      

    },

  

  }
}