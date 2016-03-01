const config = require('./');

module.exports = {
  src: config.src + '/fonts/**/*',
  watch: config.src + '/fonts/**/*',
  dest: config.dest + '/fonts'
};
