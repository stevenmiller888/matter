/** @jsx element */
import element from 'virtual-element';

/**
 * Button.
 */

export default {
  propTypes: {
    type: { type: 'string', expects: ['primary', 'secondary', 'warning'] },
    size: { type: 'string', expects: ['small', 'medium', 'large'] },
    onClick: { type: 'function' },
    label: { type: 'string' }
  },

  render({ props }) {
    let { label, size, type, onClick } = props;

    let attrs = {
      type: type || 'primary',
      size: size || 'medium',
      class: 'matter-Button',
      onClick: onClick
    };

    return (
      <button { ...attrs }>
        { label }
      </button>
    );
  }
};
