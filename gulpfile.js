var gulp = require('gulp'),
    connect = require('gulp-connect'),
    server = require('gulp-express');



gulp.task('server', function () {
    return server.run({
        file: 'app.js'
    });
});

gulp.task('default', ['server']);
