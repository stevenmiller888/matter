import element from 'dekujs/virtual-element';
import Highlight from 'segmentio/highlight';

/**
 * Languages.
 */

import objc from 'segmentio/highlight-objective-c';
import js from 'segmentio/highlight-javascript';
import csharp from 'segmentio/highlight-csharp';
import python from 'segmentio/highlight-python';
import java from 'segmentio/highlight-java';
import bash from 'segmentio/highlight-bash';
import ruby from 'segmentio/highlight-ruby';
import yaml from 'segmentio/highlight-yaml';
import xml from 'segmentio/highlight-xml';
import php from 'segmentio/highlight-php';
import css from 'segmentio/highlight-css';
import go from 'segmentio/highlight-go';

/**
 * Highlight.
 */

let highlight = new Highlight()
  .use(python)
  .use(csharp)
  .use(yaml)
  .use(java)
  .use(ruby)
  .use(bash)
  .use(objc)
  .use(xml)
  .use(css)
  .use(php)
  .use(js)
  .use(go);

/**
 * Code.
 */

export default {
  propTypes: {
    language: { type: 'string' }
  },

  render({ props }) {
    let { language, children } = props;

    let unformattedCode = children[0];
    let formattedCode = highlight.string(unformattedCode, language);

    return (
      <div class='matter-Code'>
        <code class='matter-Code-code' innerHTML={ formattedCode }>
        </code>
      </div>
    );
  }
};
