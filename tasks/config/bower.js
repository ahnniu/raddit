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
        targetDir: './assets',
        layout: function(type, component, source) {
          var renamedType = type;
          if (type === 'css') {
            renamedType = 'styles';
          }
          return path.join(renamedType, 'vendor', component);
        },
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