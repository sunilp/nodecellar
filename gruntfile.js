module.exports = function(grunt){

grunt.initConfig({
	jasmine: {
		pivotal: {
			src: 'src/js/*.js',
			options: {
				specs: 'specs/js/*Spec.js'
			}
		}
	},
	jshint: {
		all: {'specs/js/*Spec.js', 'src/js/*.js'},
		options: {
			curly: true
	    }
	},
	watch: {
		files: ['specs/js/*Spec.js', 'src/js/*.js'],
		tasks: ['jshint','jasmine']
	}

});

grunt.loadNpmTasks('grunt-contrib-jasmine');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');


grunt.registerTask('default',['jasmine']);


};