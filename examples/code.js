import element from 'dekujs/virtual-element';
import { Code } from '/lib';

/**
 * Render.
 */

function render({props, state}, setState) {
  return (
    <div>
      <Code language='javascript'>
{`
var Git = require('gity');

var git = Git()
  .add('*.js')
  .commit('-m "added js files"')
  .run();
`}
      </Code>
    </div>
  );
}

/**
 * Exports.
 */

export default {render};
