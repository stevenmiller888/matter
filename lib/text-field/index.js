/** @jsx element */
import element from 'virtual-element';

/**
 * TextField.
 */

export default {
  propTypes: {
    placeholder: { type: 'string' }
  },

  render({ props, state }) {
    let { placeholder } = props;

    let attrs = {
      class: 'matter-TextField',
      placeholder: placeholder
    };

    return (
      <input { ...attrs }>
      </input>
    );
  }
};
