module.exports = function(grunt) {

  grunt.initConfig({
    compass: {                  // Task
      // dist: {                   // Target
      //   options: {              // Target options
      //     sassDir: 'sass',
      //     cssDir: 'css',
      //     environment: 'production'
      //   }
      // },
      dev: {                    // Another target
        options: {
          sassDir: 'assets/sass',
          cssDir: 'assets/css'
        }
      }
    }
  });

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'compass']);;

};
