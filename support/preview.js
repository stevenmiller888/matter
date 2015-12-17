var fs = require('fs');
var url = require('url');
var path = require('path');
var budo = require('budo');
var babelify = require('babelify');
var postcss = require('postcss');
var postcssUrl = require('postcss-url');
var postcssImport = require('postcss-import');
var postcssNext = require('postcss-cssnext');
var autoprefixer = require('autoprefixer');

var index = path.resolve(__dirname, '../preview.html');
var css = path.resolve(__dirname, '../preview.css');

function buildCSS(req, res, next) {
  if (url.parse(req.url).pathname !== '/preview.css') return next();
  postcss([
    postcssImport,
    postcssUrl({ url: 'copy' }),
    postcssNext,
    autoprefixer
  ])
    .process(fs.readFileSync(css), { from: 'preview.css', to: 'preview.css' })
    .catch(function(error) {
      if (error.name === 'CssSyntaxError') {
        process.stderr.write(error.message + error.showSourceCode());
      } else {
        throw error;
      }
    })
    .then(function(result) {
      res.setHeader('Content-Type', 'text/css');
      res.write(result.css);
      res.end();
      return next();
    });
}

var app = budo('preview.js', {
  port: 3000,
  middleware: buildCSS,
  defaultIndex: function() {
    return fs.createReadStream(index, 'utf8');
  },
  browserify: {
    transform: babelify
  }
}).on('connect', () => {
  console.log('preview server listening on port 3000');
});
