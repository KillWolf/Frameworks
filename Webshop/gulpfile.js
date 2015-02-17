var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
	var config = {
		server: {
			baseDir: './'
		},
		browser: ["google chrome"]
	}
	browserSync(config);
});

gulp.task("serve", function(){
	gulp.watch([
			"./**/*.html", 
			'./**/*.js'
		], 
		["browser-sync", browserSync.reload]);
});

gulp.task("default", ['browser-sync', 'serve']);
