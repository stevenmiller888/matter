/** @jsx element **/

import { Mock, assert as assertElement } from 'deku-testutils';
import element from 'virtual-element';
import { Grid }  from '../';

describe('Grid', () => {
  const mock = Mock(Grid);
  const props = { children };

  it('returns a ul with the right classes', () => {
    const node = mock.render();
    assertElement.isNode(node, 'ul');
    assertElement.hasClass(node, 'matter-Grid');
  });

  describe('with children', () => {
    it('wraps any children', () => {
      const children = [ 'Hello World' ];
      const node = mock.render({ props });
      assertElement.hasChildren(node, children);
    });
  });
});
