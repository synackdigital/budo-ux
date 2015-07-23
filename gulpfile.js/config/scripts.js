var config = require('./')

module.exports = {
  watch: [
    config.bower + '/jquery/dist/jquery.js',
    config.bower + '/jquery-horunge/dist/jquery.horunge.js',
    config.src + '/scripts/**/*.js'
  ],
  src: [
    config.bower + '/jquery/dist/jquery.js',
    config.bower + '/jquery-horunge/dist/jquery.horunge.js',
    config.src + '/scripts/*.js'
  ],
  dest: config.dest + '/scripts'
}
