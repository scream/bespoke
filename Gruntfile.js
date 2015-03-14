module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      dev: {
        files: {
          "css/page/checkoutList.css": "css/page/checkoutList.less"
        }
      }
    },
    watch: {
      less: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['css/page/checkoutList.less'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('develop', ['watch']);
  
};