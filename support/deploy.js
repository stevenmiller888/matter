var deploy = require('gh-pages').publish;
var exec = require('child_process').exec;
var resolve = require('path').resolve;

/**
 * Settings.
 */

var matter = resolve(__dirname, '../build');
var url = 'http://stevenmiller888.github.io/matter/';

/**
 * Publish.
 */

exec('make', { cwd: process.cwd }, function(err) {
  if (err) console.error(err);

  deploy(matter, { message: 'matter deploy' }, function(err) {
    if (err) console.error(err);
    console.log('Deployed successfully! You can see it live at ' + url);
  });
});
