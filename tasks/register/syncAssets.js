module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
    'bower',
		'jst:dev',
		'less:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
