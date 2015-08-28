import element from 'dekujs/virtual-element';
import { Menu } from '/lib';

/**
 * Render.
 */

function render({props, state}, setState) {
  let items = ['Home', 'Profile', 'Messages', 'Notifications'];

  return (
    <Menu
      items={items}
      onChange={onChange}/>
  );

  // onChange
  function onChange(data) {
    // ...
  }
}

export default { render };
