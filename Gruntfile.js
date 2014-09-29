'use strict';

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },
    
    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: ['*.html', '*.css', 'views/*.html'],
        dest: 'build/',
        filter: 'isFile'
      }
    },

    browserify: {
      dev: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['app/**/*.js'],
        dest: 'build/bundle.js'
      }
    }
  });

  grunt.registerTask('default', ['clean:dev', 'copy:dev', 'browserify:dev']);
};