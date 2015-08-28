import element from 'dekujs/virtual-element';
import { Code } from '/lib';

/**
 * Code example.
 */

export default {
  render() {
    return (
      <Code language='javascript'>
    {`
    var Git = require('gity');

    var git = Git()
      .add('*.js')
      .commit('-m "added js files"')
      .run();
    `}
      </Code>
    );
  }
};
