import element from 'dekujs/virtual-element';
import Highlight from 'segmentio/highlight';

/**
 * Languages.
 */

import bash from 'segmentio/highlight-bash';
import csharp from 'segmentio/highlight-csharp';
import go from 'segmentio/highlight-go';
import java from 'segmentio/highlight-java';
import js from 'segmentio/highlight-javascript';
import objc from 'segmentio/highlight-objective-c';
import php from 'segmentio/highlight-php';
import python from 'segmentio/highlight-python';
import ruby from 'segmentio/highlight-ruby';
import xml from 'segmentio/highlight-xml';
import yaml from 'segmentio/highlight-yaml';
import css from 'segmentio/highlight-css';

/**
 * Highlight.
 */

let highlight = new Highlight()
  .use(js)
  .use(bash)
  .use(objc)
  .use(csharp)
  .use(python)
  .use(java)
  .use(ruby)
  .use(xml)
  .use(css)
  .use(php)
  .use(go)
  .use(yaml);

/**
 * `Code`.
 */

export default {
  propTypes: {
    language: { type: 'string', optional: false }
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
