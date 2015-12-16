import element from 'virtual-element';
import { Menu } from '../lib';

/**
 * Menu example.
 */

export default {
  render() {
    let sections = ['Home', 'Profile', 'Messages', 'Notifications'];

    return <Menu items={ sections } onChange={ change }/>;

    function change(item) {
      // ...
    }
  }
};
