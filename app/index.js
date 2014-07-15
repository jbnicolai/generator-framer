var yeoman = require('yeoman-generator');

var FramerGenerator = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
    yoInstance = this;
  },
  framerApp: function() {
    var cb = this.async();
    this.log.writeln('Downloading Framerjs');
    this.tarball('http://builds.framerjs.com/d14e883/Framer.zip', '.', cb);
  }
});

module.exports = FramerGenerator;
