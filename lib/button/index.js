import element from 'dekujs/virtual-element';

/**
 * `Button`.
 */

export default {
  propTypes: {
    label: { type: 'string', optional: false },
    size: { type: 'string', optional: true, expects: ['small', 'medium', 'large'] },
    type: { type: 'string', optional: true, expects: ['primary', 'secondary', 'warning'] },
    onClick: { type: 'function', optional: true }
  },

  render({props, state}, setState) {
    let { label, size, type, onClick } = props;

    return (
      <button class='matter-Button' size={ size || 'medium' } type={ type || 'primary' } onClick={ onClick }>
        { label }
      </button>
    );
  }
};
