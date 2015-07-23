var config = require('./')

module.exports = {
  watch: [config.src + '/fonts/**/*'],
  src: config.src + '/fonts/**/*',
  dest: config.dest + '/fonts'
}
