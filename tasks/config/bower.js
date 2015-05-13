/**
 * Install Bower packages.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to install bower packages into 
 * /assets/%filetype%/vendor/%component% of your
 * sails project.
 *
 *  For example:
 * /assets/js/vendor/bootstrap
 * /assets/styles/vendor/bootstrap
 *
 * For usage docs see:
 *    https://github.com/yatskevich/grunt-bower-task
 */
module.exports = function(grunt) {

  grunt.config.set('bower', {
    install: {
      options: {
        targetDir: './assets/vendor',
        layout: 'byComponent',
        install: true,
        verbose: true,
        cleanTargetDir: false,
        cleanBowerDir: false,
        bowerOptions: { }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
};