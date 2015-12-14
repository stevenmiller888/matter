/** @jsx element */
import element from 'virtual-element';

/**
 * Shape.
 */

export default {
  propTypes: {
    color: { type: 'string' },
    space: { type: 'string' },
    kind: { type: 'string' },
    size: { type: 'string' }
  },

  render({ props, state }, updateState) {
    let { children, color, space, kind, size } = props;

    let attrs = {
      class: 'matter-Shape',
      kind: kind || 'rectangle',
      space: space || 'medium',
      size: size || 'medium',
      color: color,
    };

    return (
      <div { ...attrs }>
        { children }
      </div>
    );
  }
};
