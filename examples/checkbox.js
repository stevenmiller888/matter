import element from 'dekujs/virtual-element';
import { Checkbox } from '/lib';

/**
 * Render.
 */

function render({props, state}, setState) {
  return (
    <div>
      <Checkbox size='medium'/>
    </div>
  );
}

/**
 * Exports.
 */

export default {render};
