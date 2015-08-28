import element from 'dekujs/virtual-element';

/**
 * `TextField`.
 */

export default {
  propTypes: {
    placeholder: { type: 'string', optional: true }
  },

  render({ props, state }, setState) {
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
