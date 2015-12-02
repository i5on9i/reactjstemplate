module.exports = function (paths) {
  var js_src = paths.src;
  var js_dest = paths.dest + 'js/';
  var js_src_out = paths.src_out + 'js/';

  var newui_src = paths.src;
  var newui_mgmtportal_js_dst = paths.dest;


  


  var paths = function (srcs) {
    for (var i = 0, l = srcs.length; i < l; i++) srcs[i] = js_src + srcs[i];
    return srcs;
  }

  return {
    // Task build from src_out
    build_from_src_out: {
      options: {
        separator: ';\n',
      },
      files: [
        // pmodum
        {
          dest: js_dest + 'pmodum.js',
          src: [
            js_src_out + 'inv-gallery.js',
            
          ]
        },
        {
          dest: js_dest + 'csrf.js',
          src: [
            js_src_out + 'csrf.js',
          ]
        }
        // // jQuery UI Extras
        // {
        //   dest: js_dest + 'jquery-ui-extras.js',
        //   src: paths([
        //     'build/extensions_jquery-ui-extras.js', // This line is required
        //     'libs/jquery-ui-1.10.4/jquery.ui.tooltip.js',
        //     'libs/jquery-ui-1.10.4/jquery.ui.datepicker.js',
        //     'build/extensions_jquery-ui.datepicker.js'
        //   ])
        // },

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
