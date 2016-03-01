const config = require('./');

module.exports = {
  src: config.src + '/images/**/*',
  watch: config.src + '/images/**/*',
  dest: config.dest + '/images'
};
