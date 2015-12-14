/** @jsx element */
import element from 'virtual-element';

/**
 * Grid.
 */

export default {
  render({ props }) {
    return (
      <ul class='matter-Grid'>
        { props.children }
      </ul>
    );
  }
};
