import element from 'dekujs/virtual-element';
import { TextField } from '/lib';

/**
 * Render.
 */

function render({props, state}, setState) {
  return (
    <div>
      <TextField placeholder='e.g. Steven Miller'/>
    </div>
  );
}

/**
 * Exports.
 */

export default {render};
