/** @jsx element */
import element from 'virtual-element';
import Highlight from 'syntax-highlighter';

/**
 * Languages.
 */

import objc from 'highlight-objective-c';
import js from 'highlight-javascript';
import csharp from 'highlight-csharp';
import python from 'highlight-python';
import java from 'highlight-java';
import bash from 'highlight-bash';
import ruby from 'highlight-ruby';
import yaml from 'highlight-yaml';
import xml from 'highlight-xml';
import php from 'highlight-php';
import css from 'highlight-css';
import go from 'highlight-go';

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
