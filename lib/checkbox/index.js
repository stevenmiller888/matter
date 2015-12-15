/** @jsx element */
import element from 'virtual-element';

/**
 * Checkbox.
 */

export default {
  propTypes: {
    size: { type: 'string', expects: ['small', 'medium', 'large'] },
    onClick: { type: 'function' },
    checked: { type: 'boolean' }
  },

  render({ props }) {
    let { size, checked, onClick } = props;

    let attrs = {
      class: 'matter-Checkbox',
      size: size || 'medium',
      onClick: onClick,
      checked: checked,
      type: 'checkbox'
    };

    return <input { ...attrs }/>;
  }
};
