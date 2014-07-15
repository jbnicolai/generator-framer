var yeoman = require('yeoman-generator');

var FramerGenerator = yeoman.generators.Base.extend({
  framerApp: function() {
    var cb = this.async();
    this.tarball('http://builds.framerjs.com/d14e883/Framer.zip', '.', cb);
  }
});

module.exports = FramerGenerator;
