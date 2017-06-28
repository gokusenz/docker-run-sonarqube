
const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');

gulp.task('default', (callback) => {
  sonarqubeScanner({
    serverUrl: 'http://sonarqube.thinknet.co.th',
    token: '',
    options: {
    },
  }, callback);
});


