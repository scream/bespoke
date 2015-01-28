module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      dev: {
        files: {
          "css/index.css": "css/index.less"
        }
      }
    },
    watch: {
      less: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['css/index.less'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('develop', ['watch']);
  
};