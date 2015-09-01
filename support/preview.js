var plugins = require('./duo');
var send = require('koa-send');
var path = require('path');
var fs = require("co-fs");
var koa = require('koa');
var Duo = require('Duo');
var app = koa();

var root = path.resolve(__dirname, '..');

app.use(function*(next) {
  var entry = this.path.slice(1);
  var ext = path.extname(entry).slice(1);

  var duo = new Duo(root)
    .sourceMap('inline')
    .use(plugins)
    .entry(entry);

  if (ext === 'js' || ext === 'css') {
    var src = yield duo.run();
    this.type = ext;
    this.body = src.code;
  } else {
    if (!entry) {
      this.type = 'html';
      this.body = yield fs.readFile('preview.html', "utf8");
    } else {
      yield send(this, entry, { root: root });
    }
  }
});

app.listen(3000);
