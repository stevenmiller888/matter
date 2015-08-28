import element from 'dekujs/virtual-element';

/**
 * Menu.
 */

export default {
  propTypes: {
    onChange: { type: 'function' },
    items: { type: 'array' }
  },

  render({ props, state }, updateState) {
    let { items, onChange } = props;
    let { activeItem } = state;

    let currentItem = activeItem || items[0];

    let menuItems = items.map(function(item) {
      return (
        <div class='matter-Menu-item' onClick={ onClick } active={ currentItem === item }>
          <span>{item}</span>
        </div>
      );

      function onClick() {
        updateState({ activeItem: item });
        if (onChange) onChange(item);
      }
    });

    return (
      <div class='matter-Menu'>
        { menuItems }
      </div>
    );
  }
};
