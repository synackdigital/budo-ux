
module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * Budo UX v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * \n* \n' +
            ' * Built with Bootstrap (http://getbootstrap.com)\n' +
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> Twitter, Inc.\n' +
            ' * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n' +
            ' */\n',

    // Task configuration.
    clean: {
      dist: 'dist'
    },

    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>-core.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>-core.css.map'
        },
        src: 'less/core.less',
        dest: 'dist/css/<%= pkg.name %>-core.css'
      },
      compileTheme: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>-theme.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>-theme.css.map'
        },
        src: 'less/theme.less',
        dest: 'dist/css/<%= pkg.name %>-theme.css'
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ]
      },
      core: {
        options: {
          map: true
        },
        src: 'dist/css/<%= pkg.name %>-core.css'
      },
      theme: {
        options: {
          map: true
        },
        src: 'dist/css/<%= pkg.name %>-theme.css'
      }
    },

    csslint: {
      options: {
        csslintrc: 'less/.csslintrc'
      },
      dist: [
        'dist/css/<%= pkg.name %>-core.css',
        'dist/css/<%= pkg.name %>-theme.css'
      ]
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        noAdvanced: true
      },
      minifyCore: {
        src: 'dist/css/<%= pkg.name %>-core.css',
        dest: 'dist/css/<%= pkg.name %>-core.min.css'
      },
      minifyTheme: {
        src: 'dist/css/<%= pkg.name %>-theme.css',
        dest: 'dist/css/<%= pkg.name %>-theme.min.css'
      }
    },

    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: 'dist/css/*.css'
      }
    },

    csscomb: {
      options: {
        config: 'less/.csscomb.json'
      },
      dist: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/'
      }
    },

    connect: {
      server: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    },

    watch: {
      less: {
        files: [
          'less/**/*.less',
          'bower_components/**/.less'
        ],
        tasks: 'less'
      }
    }

  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

  // CSS distribution task.
  grunt.registerTask('less-compile', ['less:compileCore', 'less:compileTheme']);
  grunt.registerTask('dist-css', ['less-compile', 'autoprefixer:core', 'autoprefixer:theme', 'usebanner', 'csscomb:dist', 'cssmin:minifyCore', 'cssmin:minifyTheme']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean:dist', 'dist-css']);

  // Default task.
  grunt.registerTask('default', ['dist']);

};
