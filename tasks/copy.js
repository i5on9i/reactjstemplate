module.exports = function (paths) {
  
  var js_src = paths.src;
  var js_dest = paths.dest;

  var js_server_dest = paths.dest_server_static;
  var js_bower_src = paths.bower_src;


  
  return {
    server_deploy_coffee : {
      files:[
        {
          cwd: js_dest + "js",
          src: "**/*",
          dest: js_server_dest + 'js',
          expand : true
        },
      ]

    },
    server_deploy_bowerconcat : {
      files:[
        {
          cwd: js_dest + "lib",
          src: "**/*",
          dest: js_server_dest + 'lib',
          expand : true
        },
      ]

    },

    server_deploy_css:{
      files:[
        {
          cwd: js_dest + "css",
          src: "**/*",
          dest: js_server_dest + 'css',

          expand : true
        },
      ]
    },

    server_deploy_html:{
      files:[
        {
          cwd: js_dest + "html",
          src: "**/*",
          dest: js_server_dest + 'html',
          expand : true
        },
      ]
    },

    to_build_html:{
      files:[
        {
          cwd: js_src + "html",
          src: ["*.html"],
          dest: js_dest + 'html',
          expand : true
        },
      ]
    },
    
    
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
