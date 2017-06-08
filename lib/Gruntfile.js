module.exports = function(grunt) {

  grunt.initConfig({
    // Change the b-fy task to add a transform task
    jshint: {
      options: {
        predef: [ "document", "console", '$', 'alert', 'jQuery'],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "$scope": true, "require": true, "app":true},
        browserify: true
      },
      files: ['../app/**/*.js']
    },

    watch: {
      javascripts: {
        files: ['../app/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'watch']);
};
