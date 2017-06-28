
const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');

gulp.task('default', (callback) => {
  sonarqubeScanner({
    serverUrl: 'http://localhost:9000',
    token: '',
    options: {
    },
  }, callback);
});


