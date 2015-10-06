module.exports = function (paths) {
  var js_src = paths.src;
  var js_dest = paths.dest;
  var newui_src = paths.src;
  var newui_mgmtportal_js_dst = paths.dest;
  


  var paths = function (srcs) {
    for (var i = 0, l = srcs.length; i < l; i++) srcs[i] = js_src + srcs[i];
    return srcs;
  }

  return {
    // Task nimbus_build
    nimbus_build:{
      options: {
        separator: ';\n',
      },
      files:[
        // nimbus-related .js
        {
          dest: newui_src + 'coffee/nimbus.js',
          src: [
            newui_src + 'coffee/extensions.js',
            newui_src + 'coffee/utils.js',
            newui_src + 'coffee/datatables.js',
            newui_src + 'coffee/widgets.js',
            newui_src + 'coffee/charts.js',
            newui_src + 'coffee/statswidgets.js',
            newui_src + 'coffee/totalstatswidgets.js',
            newui_src + 'coffee/wafwidgets.js'


          ]
        }
      ]
    },

    // Task mgmtportal_full_build
    mgmtportal_full_build : {
      options: {
        separator: ';\n',
      },

      files:[
        // Bootstrap
        {
          dest: newui_mgmtportal_js_dst + 'bootstrap.js',
          src: paths([
            'libs/bootstrap-3.1.1/transition.js',
            
          ])
        },

        // PixelAdmin
        {
          dest: newui_mgmtportal_js_dst + 'pixel-admin.js',
          src: paths([

            // PixelAdmin App
            'build/utils.js',
            'build/app.js',
            'build/events.js',

            
          ])
        },

        // Nimbus
        {
          dest: newui_mgmtportal_js_dst + 'mgmt-nimbus.js',
          src: paths([
            'build/nimbus_extensions.js',
            'build/nimbus_utils.js',
            'build/nimbus_datatables.js',
            'build/nimbus_widgets.js',
            'build/nimbus_charts.js',
            'build/nimbus_statswidgets.js',
            'build/nimbus_wafwidgets.js',
            'build/nimbus_mgmtportal.js'


          ])
        }
      ]
    },


    // Task build
    build: {
      options: {
        separator: ';\n',
      },
      files: [
        // Bootstrap
        {
          dest: js_dest + 'bootstrap.js',
          src: paths([
          	'libs/bootstrap-3.1.1/transition.js',
            
          ])
        },

        // PixelAdmin
        {
          dest: js_dest + 'pixel-admin.js',
          src: paths([

            // PixelAdmin App
            'build/utils.js',
            
            'build/extensions_jquery.sparklines.js'
          ])
        },

        // jQuery UI Extras
        {
          dest: js_dest + 'jquery-ui-extras.js',
          src: paths([
            'build/extensions_jquery-ui-extras.js', // This line is required
            'libs/jquery-ui-1.10.4/jquery.ui.tooltip.js',
            'libs/jquery-ui-1.10.4/jquery.ui.datepicker.js',
            'build/extensions_jquery-ui.datepicker.js'
          ])
        },

        // IE
        {
          dest: js_dest + 'ie.js',
          src: paths([
            'libs/respond.min.js',
            'libs/excanvas.js'
          ])
        },

        // Highchart
        {
          dest: js_dest + 'highcharts.js',
          src: paths([
              'libs/highcharts.src.3.0.10.js'
          ])
        }
      ]
    }
  }
}
