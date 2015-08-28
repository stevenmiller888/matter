import element from 'dekujs/virtual-element';

/**
 * `Checkbox`.
 */

export default {
  propTypes: {
    size: { type: 'string', optional: true, expects: ['small', 'medium', 'large'] },
    checked: { type: 'boolean', optional: true },
    onClick: { type: 'function', optional: true }
  },

  render({ props }) {
    let { size, checked, onClick } = props;
    return <input type='checkbox' class='matter-Checkbox' size={ size || 'medium' } onClick={ onClick } checked={ checked }/>
  }
};
