module.exports = function (paths) {
  
  var js_src = paths.src;
  var js_dest = paths.dest;
  
  return {
    
    locale_for_test : {
      files:[
        {
          cwd: js_src + "locale",
          src: "**/*",
          dest: js_src + "assets/locale",
          expand : true
        },
        {
          cwd: js_src + "locale",
          src: "**/*",
          dest: js_src + "admin/assets/locale",
          expand : true
        }
      ]
    },
    
    server_deploy_html_ind:{
      files:[{
        cwd: js_src + "jade/out",
        src: "**/*",
        dest: js_dest + 'src/main/webapp/WEB-INF/pages_ind',
        expand : true,
        rename: function(dest, src) {
          var newName = src
          if(src.indexOf('stats-admin') !== -1)
            newName = src.replace('stats-admin', 'stats')
          return dest + '/' + newName;
        }

      }]
    },

  }
}
