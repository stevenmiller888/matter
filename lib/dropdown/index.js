import element from 'dekujs/virtual-element';
import { Menu } from '../menu';

/**
 * `DropDown`.
 */

export default {
  propTypes: {
    items: { type: 'array', optional: false }
  },

  render({ props, state }, updateState) {
    let { items } = props;
    let { isChoosing, activeItem } = state;

    return (
      <div class='matter-DropDown' onClick={ change }>
        {
          isChoosing ?
          <Menu items={ items } onChange={ setActive }/> :
          activeItem || items[0]
        }
      </div>
    );

    function change() {
      updateState({ isChoosing: !isChoosing });
    }

    function setActive(name) {
      updateState({ activeItem: name });
      updateState({ isChoosing: !isChoosing });
    }
  }
};
